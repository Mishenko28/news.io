"use client"

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [search, setSearch] = useState("")

    const handleParams = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const query = search
        const params = new URLSearchParams(searchParams.toString())

        if (query) {
            params.set("search", query)
        } else {
            params.delete("search")
        }
        router.push(`?${params.toString()}`)
    }

    useEffect(() => {
        const search = searchParams.get('search') || ""
        setSearch(search)
    }, [searchParams])

    return (
        <form
            className="flex w-sm h-full"
            onSubmit={handleParams}
        >
            <Input
                type="text"
                placeholder="Search news..."
                className="flex-1 rounded-r-none"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit" className="min-h-full">
                <SearchIcon
                    className="text-muted-foreground cursor-pointer bg-border h-full px-2 size-10 rounded-r-md"
                />
            </button>
        </form>
    )
}
