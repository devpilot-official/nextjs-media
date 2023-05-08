async function fetchRepo(name: string) {
    const response = await fetch(`https://api.github.com/repos/devpilot-official/${name}`);
    return await response.json();
}

const Repo = async ({ name }: any) => {
    const repo = await fetchRepo(name);
    console.log(repo)
    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="card-stat">
                    <span>{repo.forks_count}</span>
                </div>
                <div className="card-stat">
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}

export default Repo
