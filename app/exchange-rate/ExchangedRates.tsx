import ratesResponse from "@/app/exchagedratesample.json"
import ExchangedRatesMotion from "./ExchangedRatesMotion"

export default async function ExchangedRates() {
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
        <ExchangedRatesMotion rates={rates} />
    )
}
