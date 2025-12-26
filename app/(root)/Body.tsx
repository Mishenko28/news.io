import Sidebar from "./Sidebar";
import News from "./News"
import GlobalNews from "./GlobalNews";

export default function Body({ search, category, page }: { search?: string, category?: string, page?: string }) {

    return (
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
            <Sidebar />
            <News search={search} category={category} page={page} />
            <GlobalNews />
        </div>
    )
}
