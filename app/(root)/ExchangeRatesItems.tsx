import ratesResponse from "@/app/exchagedratesample.json"
import Link from "next/link"

export default async function ExchangeRatesItems() {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY
    const base = "PHP"

    let rates: TRates

    if (process.env.NODE_ENV === 'development') {
        rates = ratesResponse
    } else {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`)
        rates = await response.json()
    }

    return (
        <Link href="/exchange-rate">
            <div className="flex overflow-hidden">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div aria-hidden={i === 0} key={i} className="flex gap-4 pl-4 animate-move-left w-max">
                        {Object.entries(rates.conversion_rates).map(([currency, rate], i) => (
                            i !== 0 &&
                            <div
                                key={currency}
                                className="text-nowrap bg-card py-1 px-4"
                            >
                                <h1 className="text-xs text-primary font-bold">PHP / {currency}</h1>
                                <p className="text-sm">₱ {(1 / rate).toFixed(4)}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Link>
    )
}
