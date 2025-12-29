"use client"

import { BookmarkCheckIcon, BookmarkPlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookMark({ article_id }: { article_id: string }) {
    const [isBookmarked, setIsBookmarked] = useState(false)

    useEffect(() => {
        const storedBookmarks = localStorage.getItem("bookmarks")
        if (!storedBookmarks) return
        const parsedStoredBookmarks: TBookmark = JSON.parse(storedBookmarks)
        if (parsedStoredBookmarks.LocalnewsId.find(id => id === article_id)) {
            setIsBookmarked(true)
        }
    }, [])

    const addBookmark = (id: string) => {
        const storedBookmarks = localStorage.getItem("bookmarks")
        let newBookmark: TBookmark

        if (!storedBookmarks) {
            newBookmark = {
                LocalnewsId: [id],
                globalNewsId: []
            }
        } else {
            const { LocalnewsId, globalNewsId }: TBookmark = JSON.parse(storedBookmarks)

            newBookmark = {
                LocalnewsId: [...LocalnewsId, id],
                globalNewsId: globalNewsId
            }
        }

        localStorage.setItem("bookmarks", JSON.stringify(newBookmark))
        setIsBookmarked(true)
    }

    const removeBookmark = (id: string) => {
        const storedBookmarks = localStorage.getItem("bookmarks")!
        const { LocalnewsId, globalNewsId }: TBookmark = JSON.parse(storedBookmarks)

        const newBookmark = {
            LocalnewsId: LocalnewsId.filter(bookmarkId => bookmarkId !== id),
            globalNewsId: globalNewsId
        }

        if (newBookmark.LocalnewsId.length === 0 && newBookmark.globalNewsId.length === 0) {
            localStorage.removeItem("bookmarks")
            setIsBookmarked(false)
            return
        }

        localStorage.setItem("bookmarks", JSON.stringify(newBookmark))
        setIsBookmarked(false)
    }

    return (
        <>
            {isBookmarked ?
                <BookmarkCheckIcon
                    className='text-green-700 absolute top-0 right-0 size-10 md:size-8 cursor-pointer p-1 bg-background rounded-bl-xl lg:bg-transparent'
                    strokeWidth={2}
                    onClick={() => removeBookmark(article_id)}
                />
                :
                <BookmarkPlusIcon
                    className='absolute top-0 right-0 size-10 md:size-8 cursor-pointer p-1 bg-background rounded-bl-xl lg:bg-transparent'
                    strokeWidth={1.5}
                    onClick={() => addBookmark(article_id)}
                />
            }
        </>
    )
}
