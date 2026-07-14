type GitHubUser = {
    login: string,
    avatar_url: string,
    name: string,
    public_repos: number
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


    return(
        <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} width={100} height={100} />
            <p>{user.login}</p>
            <p>公開リポジトリ: {user.public_repos}</p>
        </div>
        
    )

}