type GitHubUser = {
    login: string,
    avatar_url: string,
    name: string,
    public_repos: number
}

type Repo = {
    id: number,
    name: string,
    description: string | null,
    html_url: string,
    stargazers_count: number
}

export default async function UserPage({
    params,
}: {
    params: Promise<{ username: string}>
}) {
    const { username } = await params;
    const res = await fetch(`https://api.github.com/users/${username}`)

    if(!res.ok){
        return <div>ユーザーが見つかりません</div>
    }

    const user: GitHubUser = await res.json();

    const repoRes = await fetch(`https://api.github.com/users/${username}/repos`)

    const repoUser: Repo[] = await repoRes.json();


    return(
        <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} width={100} height={100} />
            <p>{user.login}</p>
            <p>公開リポジトリ: {user.public_repos}</p>
            <ul>
                {repoUser.map((repo) => {
                    return(
                        <li key={repo.id}>
                            <a href={repo.html_url}>{repo.name}</a>
                            <p>{repo.description ?? "説明なし"}</p>
                            <span>⭐️{repo.stargazers_count}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )

}