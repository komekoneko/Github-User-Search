# 🔍 GitHub User Search

GitHub のユーザー名を検索して、プロフィールとリポジトリ一覧を表示する Web アプリです！Next.js（App Router）と TypeScript で実装しています。

🔗 デモ: https://github-user-search-one-red.vercel.app/

## ✨ 機能

- ユーザー名を入力して GitHub ユーザーを検索
- Enter キーでも検索を実行
- 空入力・前後の空白をチェック（バリデーション）
- プロフィール表示（アイコン・名前・ユーザー名・公開リポジトリ数）
- そのユーザーのリポジトリ一覧を表示（説明・スター数付き、GitHub へ外部リンク）
- 存在しないユーザーは「ユーザーが見つかりません」を表示（エラーハンドリング）

## 🛠 技術スタック

| 項目 | 内容 |
| --- | --- |
| フレームワーク | Next.js (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| データ取得 | GitHub REST API（キー不要） |
| デプロイ | Vercel |

## 🚀 ローカルで動かす

```bash
git clone https://github.com/your-username/github-user-search.git
cd github-user-search
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く。

## 📁 ディレクトリ構成

```
github-user-search/
├── public
├── src
│   └── app
│       ├── users
│       │   └── [username]
│       │       └── page.tsx   # ユーザー詳細（プロフィール＋リポジトリ）
│       ├── SearchForm.tsx     # 検索フォーム（Client Component）
│       ├── layout.tsx
│       ├── page.tsx           # トップページ
│       └── globals.css
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 💡 実装のポイント

- **Server Component** でユーザー・リポジトリを `async/await fetch` で取得（`useEffect` 不要）
- 検索フォームだけを **Client Component**（`"use client"`）にし、`useState`・`useRouter` を使用
- **動的ルーティング**（`[username]`）で、1 ファイルが全ユーザーの詳細ページに対応
- API レスポンスに合わせて `GitHubUser` / `Repo` 型を定義し、型安全に扱う
- `description` は `string | null` のユニオン型で定義し、`??`（null 合体演算子）で「説明なし」を表示
- `res.ok` で 404 を判定し、存在しないユーザーを安全に処理
- `router.push` で入力値から URL を組み立ててページ遷移

## 🔧 今後の改善案

- ユーザー名の部分一致検索（候補一覧の表示）
- リポジトリのスター数順ソート
- ローディング表示（`loading.tsx`）
- `next/image` によるアイコン画像の最適化
