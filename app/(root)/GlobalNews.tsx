import { Suspense } from 'react'
import GlobalNewsItems from './GlobalNewsItems'

export default function GlobalNews() {
    return (
        <div className="flex flex-col gap-2 w-xs p-2 border">
            <h1 className="text-center text-xl">Global News</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <GlobalNewsItems />
            </Suspense>
        </div>
    )
}
