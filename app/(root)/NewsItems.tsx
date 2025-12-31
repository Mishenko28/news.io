import newsSample from '@/app/newssample.json'

import Pagination from './Pagination'
import NewsItemsMotion from './NewsItemsMotion'

export default async function NewsItems({ search, category, page }: { search?: string, category?: string, page?: string }) {
    const apiKey = process.env.NEWSDATA_IO_API_KEY
    const language = "pi"
    const country = "ph"
    const image = 1

    let data: TLocalNewsAPIResponse

    if (process.env.NODE_ENV === 'development') {
        const randomId = Date.now().toString()
        newsSample.nextPage = randomId
        data = newsSample
    } else {
        const news = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${country}&language=${language}&image=${image}${search ? `&q=${search}` : ""}${category ? `&category=${category}` : ""}${page ? `&page=${page}` : ""}`)
        data = await news.json()
    }

    return (
        <div className='flex flex-col gap-4'>
            <Pagination nextPage={data.nextPage} />
            {data.results.filter(result => result.description).length <= 0 &&
                <div className='h-full text-center'>
                    <h1 className='text-secondary'>no result
                        {(search && category) && ` for ${search} and ${category}`}
                        {(search || category) && ` for ${search || category}`}
                    </h1>
                </div>
            }
            <NewsItemsMotion data={data} />
            <Pagination nextPage={data.nextPage} />
        </div >
    )
}
