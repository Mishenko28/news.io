"use client"

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const categories = [
    { value: "business", label: "Business" },
    { value: "crime", label: "Crime" },
    { value: "domestic", label: "Domestic" },
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
    { value: "environment", label: "Environment" },
    { value: "food", label: "Food" },
    { value: "health", label: "Health" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "politics", label: "Politics" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
    { value: "top", label: "Top" },
    { value: "tourism", label: "Tourism" },
    { value: "world", label: "World" },
    { value: "other", label: "Other" }
]

export default function Sidebar() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [category, setCategory] = useState("all")

    const handleCategories = (value: string) => {
        const query = value
        const params = new URLSearchParams(searchParams.toString())

        setCategory(query)

        if (query !== "all") {
            params.set('category', query)
            params.delete('search')
        } else {
            params.delete('category')
        }
        router.push(`?${params.toString()}`)
    }

    useEffect(() => {
        const category = searchParams.get("category") || ""
        setCategory(category)
    }, [searchParams])

    return (
        <>
            <div className="min-w-28 w-52 border hidden md:block" >
                <div className="flex flex-col gap-2 h-full">
                    <Label className="text-muted-foreground p-2 bg-card">Category</Label>
                    <ScrollArea className="overflow-hidden">
                        <div className="flex flex-col px-2 text-md">
                            <div
                                className="flex items-center text-sm hover:bg-card p-1 cursor-pointer"
                                onClick={() => handleCategories("all")}
                            >
                                {category === "" && <ChevronRight className="text-primary size-4" />}
                                <p
                                    className={`${category === "" ? "text-primary" : ""}`}
                                >All</p>
                            </div>
                            {categories.map(({ label, value }) => (
                                <div
                                    key={value}
                                    className="flex items-center text-xs lg:text-sm hover:bg-card p-1 cursor-pointer"
                                    onClick={() => handleCategories(value)}
                                >
                                    {category === value && <ChevronRight className="text-primary size-4" />}
                                    <p
                                        className={`${category === value ? "text-primary" : ""}`}
                                    >{label}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div >
            <div className="block md:hidden">
                <Select value={category} onValueChange={value => handleCategories(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Category: All" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="w-fit">
                        <SelectItem value="all">All</SelectItem>
                        {categories.map(({ label, value }) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}