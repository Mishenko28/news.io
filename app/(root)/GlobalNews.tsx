import { Suspense } from 'react'
import GlobalNewsItems from './GlobalNewsItems'
import GlobalNewsItemsSkeleton from '@/components/skeletons/GlobalNewsItemsSkeleton'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function GlobalNews() {
    return (
        <div className="flex flex-col gap-2 w-full sm:max-w-xs min-w-48 py-2 border">
            <h1 className="text-center text-xl">Global News</h1>
            <ScrollArea className='overflow-hidden'>
                <Suspense fallback={<GlobalNewsItemsSkeleton />}>
                    <GlobalNewsItems />
                </Suspense>
            </ScrollArea>
        </div>
    )
}
