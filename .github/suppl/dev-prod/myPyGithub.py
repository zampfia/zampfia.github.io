import datetime

import github.AuthenticatedUser
import github.Commit
import github.GithubObject
import github.NamedUser
import github.PaginatedList
import github.Repository


def get_commits_with_page(
        repo: github.Repository.Repository,
        sha = github.GithubObject.NotSet,
        path = github.GithubObject.NotSet,
        since = github.GithubObject.NotSet,
        until = github.GithubObject.NotSet,
        author = github.GithubObject.NotSet,
        page = github.GithubObject.NotSet,
):
    """
    :calls: `GET /repos/{owner}/{repo}/commits <https://docs.github.com/en/rest/reference/repos#commits>`_
    :param repo: github.Repository.Repository
    :param sha: string
    :param path: string
    :param since: datetime.datetime
    :param until: datetime.datetime
    :param author: string or :class:`github.NamedUser.NamedUser` or :class:`github.AuthenticatedUser.AuthenticatedUser`
    :param page: int
    :rtype: :class:`github.PaginatedList.PaginatedList` of :class:`github.Commit.Commit`
    """
    assert sha is github.GithubObject.NotSet or isinstance(sha, str), sha
    assert path is github.GithubObject.NotSet or isinstance(path, str), path
    assert since is github.GithubObject.NotSet or isinstance(
        since, datetime.datetime
    ), since
    assert until is github.GithubObject.NotSet or isinstance(
        until, datetime.datetime
    ), until
    assert author is github.GithubObject.NotSet or isinstance(
        author,
        (
            str,
            github.NamedUser.NamedUser,
            github.AuthenticatedUser.AuthenticatedUser,
        ),
    ), author
    assert page is github.GithubObject.NotSet or isinstance(page, int), page
    url_parameters = dict()
    if sha is not github.GithubObject.NotSet:
        url_parameters["sha"] = sha
    if path is not github.GithubObject.NotSet:
        url_parameters["path"] = path
    if since is not github.GithubObject.NotSet:
        url_parameters["since"] = since.strftime("%Y-%m-%dT%H:%M:%SZ")
    if until is not github.GithubObject.NotSet:
        url_parameters["until"] = until.strftime("%Y-%m-%dT%H:%M:%SZ")
    if author is not github.GithubObject.NotSet:
        if isinstance(
                author,
                (
                        github.NamedUser.NamedUser,
                        github.AuthenticatedUser.AuthenticatedUser,
                ),
        ):
            url_parameters["author"] = author.login
        else:
            url_parameters["author"] = author
    if page is not github.GithubObject.NotSet:
        url_parameters["page"] = page
    return github.PaginatedList.PaginatedList(
        github.Commit.Commit, repo._requester, f"{repo.url}/commits", url_parameters
    )
