"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigations = [
    { href: "/about", label: "About" },
    { href: "/bookmarks", label: "Bookmarks" },
    { href: "/trending", label: "Trending" },
    { href: "/exchange-rate", label: "Exchange Rate" },
]

export default function Header() {
    const pathname = usePathname()

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between p-2 sm:p-4 border">
            <Link href="/" >
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-primary">news.io</h1>
            </Link>
            <Link href="/">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black">PHILIPPINE NEWS</h1>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    {navigations.map(({ href, label }) => (
                        <NavigationMenuItem key={label}>
                            <NavigationMenuLink className={pathname === href ? "bg-accent" : ""} href={href}>
                                {label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
