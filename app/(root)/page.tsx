import Sidebar from "./Sidebar";
import News from "./News"
import GlobalNews from "./GlobalNews";
import ExchangeRates from "./ExchangeRates";

export default async function page({ searchParams }: { params: { page?: string }, searchParams: { search?: string, category?: string, page?: string } }) {
    const { search, category, page } = await searchParams

    return (
        <div className="flex flex-col gap-2">
            <ExchangeRates />
            <div className="sm:sticky sm:top-4 flex-1 flex flex-col md:flex-row gap-2 sm:gap-4 sm:max-h-[calc(100svh-(var(--spacing)*6))]">
                <Sidebar />
                <div className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <News search={search} category={category} page={page} />
                    <GlobalNews />
                </div>
            </div>
        </div>
    )
}
