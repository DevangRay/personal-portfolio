"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

import ProfilePhoto from "@/app/components/ProfilePhoto";
import NavBarLink from "@/app/components/NavBarLink";
import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import { Menu } from "lucide-react";

export default function NavBar() {
    const pathname = usePathname()
    console.log(usePathname().split("/"))

    const endpoints_array = [
        {
            href: "/",
            name: "Home"
        },
        {
            href: "/projects",
            name: "Projects"
        },
        {
            href: "/contact",
            name: "Contact"
        }
    ]

    function renderEndpoint() {
        return endpoints_array.map((endpoint) => (
            pathname === endpoint.href ?
                null
                : <>
                    <NavBarLink text={endpoint.name} href={endpoint.href} />
                </>
        ));
    }

    function renderCompressedEndpoint() {
        return endpoints_array.map((endpoint) => (
            pathname === endpoint.href ?
                null
                : <>
                    <ListItem href={endpoint.href} title={endpoint.name} />
                </>
        ));
    }

    return (
        <>
            <div className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full mx-auto flex flex-row justify-between items-center py-5 px-20">
                <div>
                    <ProfilePhoto />
                </div>
                <div className="hidden md:flex min-h-[100%] flex-row gap-4 items-center">
                    {renderEndpoint()}

                    <ThemeToggleButton />
                </div>
                <div className="flex md:hidden min-h-[100%] flex flex-row gap-4 items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Menu />
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="flex flex-col justify-center items-center">
                                        {renderCompressedEndpoint()}
                                        <div className="flex flex-col gap-1 text-sm">
                                            <div className="leading-none font-medium">
                                                <ThemeToggleButton />
                                            </div>
                                        </div>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
