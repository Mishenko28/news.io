"use client"

const PAGE_OFFSET = 3

type Pages = {
    activePageNumber: number,
    searchParams: {
        search: string,
        category: string
    }
    pages: {
        pageNumber: number,
        pageId: string
    }[]
}

import { Pagination as PaginationRoot, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pagination({ nextPage }: { nextPage: string | null }) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [isMount, setIsMount] = useState(false)

    const [pages, setPages] = useState<Pages>({
        activePageNumber: 1,
        searchParams: {
            search: searchParams.get('search') || "",
            category: searchParams.get('category') || ""
        },
        pages: [
            { pageNumber: 1, pageId: "first" }
        ]
    })

    useEffect(() => {
        setIsMount(true)
        const localPages = localStorage.getItem('pages')

        if (!localPages) {
            localStorage.setItem('pages', JSON.stringify(pages))
            return
        }

        const parsedPages: Pages = JSON.parse(localPages)
        const { searchParams: { search, category } } = parsedPages

        const searchQuery = searchParams.get('search') || ""
        const categoryQuery = searchParams.get('category') || ""

        if (search !== searchQuery || category !== categoryQuery) {
            localStorage.removeItem('pages')
            localStorage.setItem('pages', JSON.stringify(pages))
        }

        setPages(parsedPages)

        const query = searchParams.get('page')
        if (!query) return

        // check if pageId exists in pages
        const page = parsedPages.pages.find((p: { pageNumber: number, pageId: string }) => p.pageId === query)
        if (page) {
            setPages((prev) => ({
                ...prev,
                activePageNumber: page.pageNumber
            }))
        }
    }, [])

    const handleClick = (pageNumber: number, pageId: string) => {
        if (pageNumber === pages.activePageNumber) return

        const exist = pages.pages.find(page => page.pageNumber === pageNumber)
        let newPages = {
            ...pages,
            activePageNumber: pageNumber,
        }

        if (!exist) {
            newPages.pages.push({ pageNumber, pageId })
        }

        setPages(newPages)
        localStorage.setItem('pages', JSON.stringify(newPages))

        const params = new URLSearchParams(searchParams.toString())
        if (pageNumber === 1) {
            params.delete('page')
        } else {
            params.set('page', pageId)
        }
        router.push(`/?${params.toString()}`)
    }

    if (!isMount) return

    return (
        <PaginationRoot>
            <PaginationContent>
                {pages.pages.filter(page => page.pageNumber <= pages.activePageNumber + PAGE_OFFSET && page.pageNumber >= pages.activePageNumber - PAGE_OFFSET)
                    .map(({ pageNumber, pageId }) => (
                        <PaginationLink key={pageId} isActive={pages.activePageNumber === pageNumber} onClick={() => handleClick(pageNumber, pageId)} className="cursor-pointer">
                            <PaginationItem>{pageNumber}</PaginationItem>
                        </PaginationLink>
                    ))
                }
                {(nextPage && pages.activePageNumber >= pages.pages.length - (PAGE_OFFSET - 1)) &&
                    <PaginationLink onClick={() => handleClick(pages.pages.length + 1, nextPage)} className="cursor-pointer">
                        <PaginationItem>{pages.pages.length + 1}</PaginationItem>
                    </PaginationLink>
                }
            </PaginationContent>
        </PaginationRoot>
    )
}
