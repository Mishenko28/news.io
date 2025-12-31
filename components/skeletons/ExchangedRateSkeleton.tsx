import { Skeleton } from "../ui/skeleton";

export default function ExchangedRateSkeleton() {
    return (
        <div className="flex overflow-hidden">
            {Array.from({ length: 2 }).map((_, i) => (
                <div aria-hidden={i === 0} key={i} className="flex gap-4 pl-4 animate-move-left w-max">
                    {Array.from({ length: 150 }).map((_, i) => (
                        i !== 0 &&
                        <Skeleton key={i} className="w-24 h-11" />
                    ))}
                </div>
            ))}
        </div>
    )
}
