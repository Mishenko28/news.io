import newsSample from '@/app/globalnewssample.json'
import VideoPlayer from '@/components/VideoPlayer'
import moment from 'moment-timezone'
import Image from 'next/image'
import Link from 'next/link'

export default async function GlobalNewsItems() {
    const apiKey = process.env.NEWSDATA_IO_API_KEY
    const language = "en"
    const image = 0
    const video = 1

    let data: TGlobalNewsAPIResponse

    if (process.env.NODE_ENV === 'development') {
        data = newsSample
    } else {
        const news = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&language=${language}&image=${image}&video=${video}`)
        data = await news.json()
    }

    return (
        <div className='flex flex-col gap-12'>
            {data.results.map(({ article_id, title, video_url, source_url, source_icon, source_name, pubDate, link }) => (
                <div key={article_id} className='flex flex-col gap-2'>
                    <VideoPlayer video_url={video_url} />
                    <Link href={link} target='_blank'>
                        <h2 className='text-primary text-center leading-4.5 my-2 mx-4'>{title}</h2>
                    </Link>
                    <div className='flex justify-between items-center border-b p-1'>
                        <Link href={source_url} target='_blank' className='flex gap-2 items-center w-fit'>
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
                        <p className='text-sm text-muted-foreground text-nowrap'>{moment(pubDate).tz('Asia/Manila').fromNow()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
