import Body from "./Body";
import Header from "./Header";

export default async function Home({ searchParams }: { searchParams: { search?: string, category?: string } }) {
  const { search, category } = await searchParams

  return (
    <div className="flex flex-col gap-4 w-full h-svh p-4">
      <Header />
      <Body search={search} category={category} />
    </div>
  )
}
