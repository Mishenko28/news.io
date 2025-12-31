"use client"

import moment from 'moment-timezone'
import Image from 'next/image'
import Link from 'next/link'
import CategorySearchparams from '@/components/CategorySearchparams'
import BookMark from '@/components/BookMark'

import { motion } from "framer-motion"

export default function NewsItemsMotion({ data }: { data: TLocalNewsAPIResponse }) {
    return (
        <div className='flex flex-col gap-2'>
            {data.results.filter(result => result.description)
                .map(({ image_url, article_id, title, link, description, pubDate, creator, category, source_icon, source_name, source_url }, i) => (
                    <motion.div
                        key={article_id}
                        className={`relative flex flex-col lg:flex-row pb-12 ${i % 2 === 1 && "bg-card"}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, type: "spring" }}
                    >
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
                            <div className='flex justify-between gap-4'>
                                <CategorySearchparams category={category} />
                                <p className='text-sm text-muted-foreground text-right'>
                                    <span>{moment(pubDate).tz('Asia/Manila').fromNow()}</span>
                                    {creator && <span className='text-nowrap'>{` • by ${creator}`}</span>}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
        </div>
    )
}
