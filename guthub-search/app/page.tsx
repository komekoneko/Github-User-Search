import SearchForm from "./SearchForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">GitHub User Search</h1>
        <p className="mt-2 text-gray-500">
          ユーザー名を検索して、プロフィールとリポジトリを表示します
        </p>
      </div>
      <SearchForm />
    </main>
  );
}