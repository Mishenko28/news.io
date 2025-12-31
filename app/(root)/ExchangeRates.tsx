import { Suspense } from "react";
import ExchangeRatesItems from "./ExchangeRatesItems";
import ExchangedRateSkeleton from "@/components/skeletons/ExchangedRateSkeleton";

export default function ExchangeRates() {
    return (
        <Suspense fallback={<ExchangedRateSkeleton />}>
            <ExchangeRatesItems />
        </Suspense>
    )
}
