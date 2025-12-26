import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between p-2 sm:p-4 border">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-primary">News.io</h1>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">PHILIPPINE NEWS</h1>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/about">About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/bookmarks">Bookmarks</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/trending">Trending</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/settings">Settings</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
