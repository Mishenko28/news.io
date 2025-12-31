"use client"

import { motion } from "framer-motion"

export default function ExchangedRatesMotion({ rates }: { rates: TRates }) {
    return (
        <div className="grid gap-2 sm:gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
            {Object.entries(rates.conversion_rates).map(([currency, rate], i) => (
                i !== 0 &&
                <motion.div
                    key={currency}
                    className="border px-2 py-4 sm:p-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <h2 className="text-primary font-bold text-xs sm:text-base">PHP / {currency}</h2>
                    <p className="text-right sm:text-xl">{rate}</p>
                </motion.div>
            ))}
        </div>
    )
}
