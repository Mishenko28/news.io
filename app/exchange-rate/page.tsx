import { Suspense } from "react";
import ExchangedRates from "./ExchangedRates";
import ExchangedRatesSkeleton from "@/components/skeletons/ExchangedRatesSkeleton";

export default function page() {
    return (
        <Suspense fallback={<ExchangedRatesSkeleton />}>
            <ExchangedRates />
        </Suspense>
    )
}
