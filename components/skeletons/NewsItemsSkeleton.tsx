import { Skeleton } from "../ui/skeleton";

export default function NewsItemsSkeleton() {
    return (
        <div className='flex flex-col'>
            {Array.from({ length: 5 }).map((_, i) => (
                <div className={`flex flex-col lg:flex-row gap-2 py-6 ${i % 2 === 1 && "bg-card"}`} key={i}>
                    <div className='flex flex-col gap-2'>
                        <Skeleton className="min-w-full lg:min-w-3xs aspect-video" />
                        <div className='flex gap-2 items-center'>
                            <Skeleton className="min-w-[24px] aspect-square" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-between w-full'>
                        <div className='flex flex-col'>
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-24 w-full" />
                        </div>
                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-wrap gap-1 '>
                                <Skeleton className="h-5 w-32" />
                            </div>
                            <Skeleton className="h-6 w-48" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
