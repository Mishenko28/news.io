"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Separator } from './ui/separator'

export default function CategorySearchparams({ category }: { category: string[] }) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleCategorie = (value: string) => {
        const query = value
        const params = new URLSearchParams(searchParams.toString())

        params.set('category', query)
        params.delete('search')

        router.push(`?${params.toString()}`)
    }

    return (
        <div className='flex flex-wrap gap-1 text-muted-foreground text-sm'>
            {category.map((cat, i) => (
                <div key={cat} className='flex gap-1'>
                    <h6 className='cursor-pointer' onClick={() => handleCategorie(cat)}>{cat}</h6>
                    {i + 1 !== category.length && <Separator orientation='vertical' />}
                </div>
            ))}
        </div>
    )
}
