import Sidebar from "./Sidebar";
import News from "./News"
import GlobalNews from "./GlobalNews";

export default function Body({ search, category }: { search?: string, category?: string }) {

    return (
        <div className="flex-1 flex gap-4">
            <Sidebar />
            <News search={search} category={category} />
            <GlobalNews />
        </div>
    )
}
