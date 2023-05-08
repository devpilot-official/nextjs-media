import Link from "next/link";
import { Key } from "react";

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/devpilot-official/repos')
    return await response.json()
}

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <div className="repo-container">
            <h1>Repositories ({repos.length})</h1>
            <ul className="repo-list">
                {
                    repos.map((repo: any) => (
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="repo-details">
                                    <span>{repo.stargazers_count}</span>
                                    <span>{repo.forks_count}</span>
                                    <span>{repo.watchers_count}</span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ReposPage