import { Suspense } from 'react'
import GlobalNewsItems from './GlobalNewsItems'
import GlobalNewsItemsSkeleton from '@/components/skeletons/GlobalNewsItemsSkeleton'

export default function GlobalNews() {
    return (
        <div className="flex flex-col gap-2 w-full sm:max-w-xs p-2 border">
            <h1 className="text-center text-xl">Global News</h1>
            <Suspense fallback={<GlobalNewsItemsSkeleton />}>
                <GlobalNewsItems />
            </Suspense>
        </div>
    )
}
