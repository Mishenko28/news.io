import { Suspense } from "react";
import SearchBar from "./SearchBar";
import NewsItems from "./NewsItems";
import NewsItemsSkeleton from "@/components/skeletons/NewsItemsSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function News({ search, category, page }: { search?: string, category?: string, page?: string }) {
    return (
        <div className="flex-1 flex flex-col gap-2 border">
            <div className="flex justify-end border-b p-2">
                <SearchBar />
            </div>
            <ScrollArea className="p-2 overflow-hidden">
                <h1 className="text-xl mb-2">Latest News</h1>
                {category && <p className="font-light">Categorized by: <span className="text-accent font-medium">{category}</span></p>}
                {search && <p>Search result:</p>}
                <Suspense key={`${search}${category}${page}`} fallback={<NewsItemsSkeleton />}>
                    <NewsItems search={search} category={category} page={page} />
                </Suspense>
            </ScrollArea>
        </div>
    )
}
