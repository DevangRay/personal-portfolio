"use client";
import * as React from "react";
import Link from "next/link";
import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function NavBarListItem({
    title,
    children,
    href,
    active,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, active: boolean }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div
                            className={
                                `
                                ${active
                                    ? "text-(--secondary-text) font-semibold border-(--secondary-text)"
                                    : "text-(--muted-foreground) hover:text-(--foreground)"
                                }
                                `
                            }
                        >{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}