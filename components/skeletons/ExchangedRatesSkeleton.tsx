import { Skeleton } from "../ui/skeleton";

export default function ExchangedRatesSkeleton() {
    return (
        <div className="grid gap-2 sm:gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 50 }).map((_, i) => (
                <Skeleton key={i} className="h-18 sm:h-21 w-full" />
            ))}
        </div>
    )
}
