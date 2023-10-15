import os
import CommitList
from github import Github, Commit

UsableCommitList = list[Commit.Commit]

g = Github(os.environ["GITHUB_TOKEN"])
repo = g.get_repo("zampfia/zampfia.github.io")

all_commits = repo.get_commits()
dev_commits: UsableCommitList = []

for commit in all_commits:
    dev_commits.append(commit)
    if "start dev->prod" in commit.commit.message:
        break

head_commit_message = str(dev_commits[0].commit.message).splitlines()
for line in head_commit_message:
    if line.startswith("Title: "):
        title = "[dev->prod] " + line[7:]

added = CommitList()
removed = CommitList()
changed = CommitList()
updated = CommitList()

for commit in dev_commits:
    if "[add]" in commit.commit.message:
        added.titles.append(commit.commit.message.split("\n")[0])
        added.hashes.append(commit.sha)
    if "[remove]" in commit.commit.message:
        removed.titles.append(commit.commit.message.split("\n")[0])
        removed.hashes.append(commit.sha)
    if "[change]" in commit.commit.message:
        changed.titles.append(commit.commit.message.split("\n")[0])
        changed.hashes.append(commit.sha)
    if commit.author.login == "dependabot[bot]":
        if commit.commit.message.startswith("Bump"):
            if "and" in commit.commit.message:
                s = commit.commit.message.split("\n")[0].split("Bump ")[1]
                updated.titles.append(s)
            else: 
                s = commit.commit.message.split("\n")[0].split("Bump ")[1]
                a = s.split(" from ")[0]
                b = s.split(" from ")[1].split(" to ")[0]
                c = s.split(" to ")[1]
                updated.titles.append(a + " [" + b + "->" + c +"]")
        else:
            s = commit.commit.message.split(": bump ")[1].split("\n")[0]
            a = s.split(" from ")[0]
            b = s.split(" from ")[1].split(" to ")[0]
            c = s.split(" to ")[1]
            updated.titles.append(a + " [" + b + "->" + c +"]")
        updated.hashes.append(commit.sha)

body = ""

body += "Added:\n"
for i in range(added.titles.count()):
    body += "- " + added.titles[i].strip() + " (" + added.hashes[i] + ")\n"

body += "\nRemoved:\n"
for i in range(removed.titles.count()):
    body += "- " + removed.titles[i].strip() + " (" + removed.hashes[i] + ")\n"

body += "\nChanged:\n"
for i in range(changed.titles.count()):
    body += "- " + changed.titles[i].strip() + " (" + changed.hashes[i] + ")\n"

body += "\nUpdated:\n"
for i in range(updated.titles.count()):
    body += "- " + updated.titles[i].strip() + " (" + updated.hashes[i] + ")\n"

pull = repo.create_pull(title, body, "prod", "dev")

pull.add_to_labels("dev->prod")