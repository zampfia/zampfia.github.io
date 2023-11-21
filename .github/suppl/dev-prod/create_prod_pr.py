import os
from commitList import CommitList
from github import Github, Commit, PaginatedList
import myPyGithub

UsableCommitList = list[Commit.Commit]

g = Github(os.environ["GITHUB_TOKEN"])
repo = g.get_repo("zampfia/zampfia.github.io")

dev_commits: UsableCommitList = []
found = False
page = 1


def get_actual_commits(commits: PaginatedList.PaginatedList):
    for _commit in commits:
        dev_commits.append(_commit)
        if "start dev->prod" in _commit.commit.message:
            return True
    return False


while not found:
    all_commits = myPyGithub.get_commits_with_page(repo, page = page)
    found = get_actual_commits(all_commits)
    page += 1

head_commit_message = str(dev_commits[0].commit.message).splitlines()

title = "Stuff"
for line in head_commit_message:
    if line.startswith("Title: "):
        title = "[dev->prod] " + line[7:]

added = CommitList()
removed = CommitList()
changed = CommitList()
fixed = CommitList()
updated = CommitList()

for commit in dev_commits:
    if "[no prod]" in commit.commit.message:
        continue
    elif "[add]" in commit.commit.message:
        added.titles.append(commit.commit.message.split("\n")[0])
        added.hashes.append(commit.sha)
    elif "[remove]" in commit.commit.message:
        removed.titles.append(commit.commit.message.split("\n")[0])
        removed.hashes.append(commit.sha)
    elif "[change]" in commit.commit.message:
        changed.titles.append(commit.commit.message.split("\n")[0])
        changed.hashes.append(commit.sha)
    elif "[fix]" in commit.commit.message:
        fixed.titles.append(commit.commit.message.split("\n")[0])
        fixed.hashes.append(commit.sha)
    elif "[update]" in commit.commit.message:
        try:
            s = commit.commit.message.split(": bump ")[1].split("\n")[0]
        except:
            s = commit.commit.message.split(" bump ")[1].split("\n")[0]
        a = s.split(" from ")[0]
        b = s.split(" from ")[1].split(" to ")[0]
        c = s.split(" to ")[1]
        updated.titles.append(a + " [" + b + "->" + c + "]")
        updated.hashes.append(commit.sha)
    elif commit.author.login == "dependabot[bot]":
        if commit.commit.message.startswith("Bump"):
            if "and" in commit.commit.message:
                s = commit.commit.message.split("\n")[0].split("Bump ")[1]
                updated.titles.append(s)
            else:
                s = commit.commit.message.split("\n")[0].split("Bump ")[1]
                a = s.split(" from ")[0]
                b = s.split(" from ")[1].split(" to ")[0]
                c = s.split(" to ")[1]
                updated.titles.append(a + " [" + b + "->" + c + "]")
        else:
            s = commit.commit.message.split(": bump ")[1].split("\n")[0]
            a = s.split(" from ")[0]
            b = s.split(" from ")[1].split(" to ")[0]
            c = s.split(" to ")[1]
            updated.titles.append(a + " [" + b + "->" + c + "]")
        updated.hashes.append(commit.sha)

body = ""

if len(added.titles) != 0:
    body += "Added:\n"
    for i in range(len(added.titles)):
        body += "- " + added.titles[i].strip() + " (" + added.hashes[i] + ")\n"

if len(removed.titles) != 0:
    if body == "":
        body += "Removed:\n"
    else:
        body += "\nRemoved:\n"
    for i in range(len(removed.titles)):
        body += "- " + removed.titles[i].strip() + " (" + removed.hashes[i] + ")\n"

if len(changed.titles) != 0:
    if body == "":
        body += "Changed:\n"
    else:
        body += "\nChanged:\n"
    for i in range(len(changed.titles)):
        body += "- " + changed.titles[i].strip() + " (" + changed.hashes[i] + ")\n"

if len(fixed.titles) != 0:
    if body == "":
        body += "Fixed:\n"
    else:
        body += "\nFixed:\n"
    for i in range(len(fixed.titles)):
        body += "- " + fixed.titles[i].strip() + " (" + fixed.hashes[i] + ")\n"

if len(updated.titles) != 0:
    if body == "":
        body += "Updated:\n"
    else:
        body += "\nUpdated:\n"
    for i in range(len(updated.titles)):
        body += "- " + updated.titles[i].strip() + " (" + updated.hashes[i] + ")\n"


pull = repo.create_pull(title=title, body=body, base="prod", head="dev")

pull.add_to_labels("dev->prod")