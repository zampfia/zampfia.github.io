import os
from datetime import datetime, timedelta
from github import Github

# Create a GitHub API client using the token provided by the workflow
g = Github(os.environ['GITHUB_TOKEN'])

# Get the repository
repo = g.get_repo('<owner>/<repository>')

# Get all open issues and pull requests
open_issues = repo.get_issues(state='open')
open_pulls = repo.get_pulls(state='open')

# Define the threshold for inactive issues/PRs (2 weeks)
inactive_threshold = datetime.now() - timedelta(weeks=2)

# Iterate through each open issue and check the last comment timestamp
for issue in open_issues:
    last_comment = issue.get_comments().reversed[0].created_at
    if last_comment <= inactive_threshold:
        issue.add_to_labels('old')

# Iterate through each open pull request and check the last comment timestamp
for pull in open_pulls:
    last_comment = pull.get_comments().reversed[0].created_at
    if last_comment <= inactive_threshold:
        pull.add_to_labels('old')