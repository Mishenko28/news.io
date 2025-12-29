import Body from "./Body";
import Header from "./Header";

export default async function Home({ searchParams }: { searchParams: { search?: string, category?: string, page?: string } }) {
  const { search, category, page } = await searchParams

  return (
    <div className="flex flex-col gap-2 sm:gap-4 w-full p-1 sm:p-4">
      <Header />
      <Body search={search} category={category} page={page} />
    </div>
  )
}
