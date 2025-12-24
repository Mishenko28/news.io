import Sidebar from "./Sidebar";
import News from "./News"
import Popular from "./Popular";

export default function Body({ search }: { search?: string }) {

    return (
        <div className="flex-1 flex gap-4">
            <Sidebar />
            <News search={search} />
            <Popular />
        </div>
    )
}
