import { Skeleton } from "../ui/skeleton";

export default function GlobalNewsItemsSkeleton() {
    return (
        <div className='flex flex-col gap-12'>
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="aspect-video" />
                    <Skeleton className='h-9 w-full my-2' />
                    <div className='flex justify-between items-center bg-card p-1'>
                        <div className='flex gap-2 items-center'>
                            <Skeleton className="min-w-[24px] aspect-square" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                        <Skeleton className='h-6 w-24' />
                    </div>
                </div>
            ))}
        </div>
    )
}
