import { BookMarkedIcon } from "lucide-react";
import BookmarkClient from "./BookmarkClient";

export default function page() {
    const api = process.env.NEWSDATA_IO_API_KEY!

    return (
        <div className="flex flex-col gap-2 border">
            <div className="flex items-center text-green-700 p-2 border-b">
                <BookMarkedIcon className="size-8" />
                <h1 className="text-3xl font-semibold">Bookmarks</h1>
            </div>
            <BookmarkClient api={api} />
        </div>
    )
}
