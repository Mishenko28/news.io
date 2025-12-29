"use client"

import BookMark from "@/components/BookMark"
import LoadingUI from "@/components/LoadingUI"
import moment from "moment-timezone"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BookmarkClient({ api }: { api: string }) {
    const [local, setLocal] = useState<TLocalNewsAPIResponse | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchBookmarks = async () => {
        const storedBookmarks = localStorage.getItem("bookmarks")

        if (!storedBookmarks) {
            setIsLoading(false)
            return
        }

        const { LocalnewsId, globalNewsId }: TBookmark = JSON.parse(storedBookmarks)
        const ids = LocalnewsId.join()

        const local = await fetch(`https://newsdata.io/api/1/latest?apikey=${api}&id=${ids}`)
        const data = await local.json()
        setLocal(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchBookmarks()
    }, [])

    if (isLoading) {
        return (
            <LoadingUI />
        )
    }

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            {local?.results.map(({ image_url, article_id, title, link, description, pubDate, creator, category, source_icon, source_name, source_url }, i) => (
                <div key={article_id} className={`relative flex flex-col lg:flex-row pb-12 ${i % 2 === 1 && "bg-card"}`}>
                    <BookMark article_id={article_id} />
                    <div className='flex flex-col gap-2'>
                        <div className='overflow-hidden bg-card'>
                            <Image
                                src={image_url}
                                alt='news image'
                                width={256}
                                height={256}
                                className='min-w-full lg:min-w-3xs aspect-video object-cover hover:scale-110 transition-transform'
                            />
                        </div>
                        <Link href={source_url} target='_blank' className='flex gap-2 items-center w-fit px-2'>
                            <Image
                                src={source_icon}
                                alt='source logo'
                                width={24}
                                height={24}
                                loading='lazy'
                                className='min-w-6 object-cover'
                            />
                            <h1 className='text-sm'>{source_name}</h1>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-2 justify-between p-2'>
                        <div className='flex flex-col gap-4'>
                            <Link href={link} target='_blank' className='w-fit'>
                                <h1 className='text-primary text-lg leading-4.5 mr-10'>{title}</h1>
                            </Link>
                            <p className='text-sm text-justify'>{description}</p>
                        </div>
                        <p className='text-sm text-muted-foreground text-right'>
                            <span>{moment(pubDate).tz('Asia/Manila').fromNow()}</span>
                            {creator && <span className='text-nowrap'>{` • by ${creator}`}</span>}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}