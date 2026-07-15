type GitHubUser = {
  login: string;
  avatar_url: string;
  name: string;
  public_repos: number;
};

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
};

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    return <div>ユーザーが見つかりません</div>;
  }

  const user: GitHubUser = await res.json();

  const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);

  const repoUser: Repo[] = await repoRes.json();

  return (
  <div className="max-w-2xl mx-auto p-8">
    {/* プロフィール部分 */}
    <div className="flex items-center gap-4 mb-8">
      <img
        src={user.avatar_url}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500">@{user.login}</p>
        <p className="text-sm text-gray-600">
          公開リポジトリ: {user.public_repos}
        </p>
      </div>
    </div>

    {/* リポジトリ一覧 */}
    <h2 className="text-xl font-bold mb-4">リポジトリ</h2>
    <ul className="flex flex-col gap-3">
      {repoUser.map((repo) => {
        return (
          <li
            key={repo.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="font-bold text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600 mt-1">
              {repo.description ?? "説明なし"}
            </p>
            <span className="text-sm text-gray-500">
              ⭐️ {repo.stargazers_count}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);
}
