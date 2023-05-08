import Link from "next/link"

async function fetchRepoContents(name: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const contents = await fetch(`https://api.github.com/repos/devpilot-official/${name}/contents`)
    return await contents.json()
}

const RepoDirs = async ({ name }: any) => {
    const repoContents = await fetchRepoContents(name)
    const dirs = repoContents.filter((content: any) => content.type === 'dir')
    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir: any) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs