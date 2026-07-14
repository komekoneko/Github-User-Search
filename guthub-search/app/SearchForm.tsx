"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchForm(){
    const [ input, setInput ] = useState("");
    const router = useRouter()

    const searchFn = () => {
        router.push(`/users/${input}`)
        setInput("")
    }

    return(
        <>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() => searchFn()}>検索</button>
        </>
        

    )
}