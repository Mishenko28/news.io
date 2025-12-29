import Sidebar from "./Sidebar";
import News from "./News"
import GlobalNews from "./GlobalNews";

export default function Body({ search, category, page }: { search?: string, category?: string, page?: string }) {
    return (
        <div className="sm:sticky sm:top-4 flex-1 flex flex-col md:flex-row gap-2 sm:gap-4 sm:max-h-[calc(100svh-(var(--spacing)*8))]">
            <Sidebar />
            <div className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <News search={search} category={category} page={page} />
                <GlobalNews />
            </div>
        </div>
    )
}
