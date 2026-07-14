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
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={() => searchFn()}>検索</button>
    </>
  );
}
