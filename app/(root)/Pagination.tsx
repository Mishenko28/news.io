"use client"

import { Pagination as PaginationRoot, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useEffect, useState } from "react";

export default function Pagination({ totalResults, nextPage }: { totalResults: number, nextPage?: string }) {
    const [pages, setPages] = useState<{ isCurrent: boolean, pageNumber: number, pageId: string | undefined }[]>([])

    const handleNextPage = (value: string) => {
        localStorage.removeItem('pages')
        const updatedPages = pages.map(page => ({ ...page, isCurrent: false }))
        const newPages = [...updatedPages, { isCurrent: true, pageNumber: pages.length + 1, pageId: value }]
        setPages(newPages)
        localStorage.setItem('pages', JSON.stringify(newPages))
    }

    const handleGoToPage = (pageNumber: number) => {
        localStorage.removeItem('pages')
        const updatedPages = pages.map(page => ({ ...page, isCurrent: false }))
        const newPages = updatedPages.map(page => page.pageNumber === pageNumber ? { ...page, isCurrent: true } : page)
        setPages(newPages)
        localStorage.setItem('pages', JSON.stringify(newPages))
    }

    useEffect(() => {
        const storedPages = localStorage.getItem('pages')
        if (storedPages) {
            setPages(JSON.parse(storedPages))
            return
        }

        const initialPages = [{ isCurrent: true, pageNumber: 1, pageId: "first page" }]
        setPages(initialPages)
        localStorage.setItem('pages', JSON.stringify(initialPages))
    }, [])

    return (
        <PaginationRoot>
            <PaginationContent>
                {pages.filter(page => pages.find(p => p.isCurrent)?.pageNumber! - 5 < page.pageNumber)
                    .map(({ isCurrent, pageNumber, pageId }) => (
                        <PaginationItem key={pageId} onClick={() => handleGoToPage(pageNumber)}>
                            <PaginationLink isActive={isCurrent}>{pageNumber}</PaginationLink>
                        </PaginationItem>
                    ))}
                {(totalResults > pages.length * 10 && nextPage && pages.find(p => p.isCurrent)?.pageNumber!) &&
                    <PaginationItem
                        onClick={() => handleNextPage(nextPage)}
                    >
                        <PaginationLink>
                            {pages.find(page => page.isCurrent)?.pageNumber! + 1}
                        </PaginationLink>
                    </PaginationItem>
                }
            </PaginationContent>
        </PaginationRoot>
    )
}
