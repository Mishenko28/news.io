import newsSample from '@/app/newssample.json'
import { Separator } from '@/components/ui/separator'
import moment from 'moment-timezone'
import Image from 'next/image'
import Link from 'next/link'

export default async function NewsItems({ search }: { search?: string }) {
    const apiKey = process.env.NEWSDATA_IO_API_KEY
    const language = "pi"
    const country = "ph"
    const image = 1

    // const news = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${country}&language=${language}&image={image}${search ? `&q=${search}` : ""}`)
    // const data = await news.json()
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const data = newsSample

    return (
        <div className='flex flex-col gap-12'>
            {data.results.filter(result => result.description)
                .map(({ image_url, article_id, title, link, description, pubDate, creator, category, source_icon, source_name, source_url }) => (
                    <div key={article_id} className='flex items-start gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='overflow-hidden'>
                                <Image
                                    src={image_url}
                                    alt='news image'
                                    width={256}
                                    height={256}
                                    className='min-w-3xs aspect-video object-cover hover:scale-110 transition-transform'
                                />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image
                                    src={source_icon}
                                    alt='source logo'
                                    width={24}
                                    height={24}
                                    className='min-w-6 object-cover'
                                />
                                <Link href={source_url} target='_blank'>
                                    <h1 className='text-sm'>{source_name}</h1>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <div className='flex flex-col'>
                                <Link href={link} target='_blank'>
                                    <h1 className='text-accent'>{title}</h1>
                                </Link>
                                <p className='text-sm font-light text-justify'>{description}</p>
                            </div>
                            <div className='flex justify-between gap-4'>
                                <div className='flex flex-wrap gap-1 '>
                                    {category.map((cat, i) => (
                                        <div className='flex gap-1'>
                                            <h6
                                                key={cat}
                                                className='text-secondary text-sm cursor-pointer'
                                            >{cat}</h6>
                                            {i + 1 !== category.length && <Separator orientation='vertical' />}
                                        </div>
                                    ))}
                                </div>
                                <span className='text-sm text-muted-foreground text-nowrap'>
                                    {`${moment(pubDate).tz('Asia/Manila').fromNow()} • by ${creator}`}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
