"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchFn = () => {
    const newInput = input.trim();
    if (newInput === "") {
      return alert("ユーザー名を入力してください");
    }
    router.push(`/users/${newInput}`);
    setInput("");
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
        searchFn()
    }
  }

  return (
    <div className="flex w-full max-w-md gap-2">
      <input
        type="text"
        placeholder="GitHubユーザー名"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={() => searchFn()}
        className="rounded-lg bg-blue-500 px-5 py-2 font-medium text-white hover:bg-blue-600 whitespace-nowrap"
      >
        検索
      </button>
    </div>
  );
}
