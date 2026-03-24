"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

import ProfilePhoto from "@/app/components/navbar/ProfilePhoto";
import NavBarLink from "@/app/components/navbar/NavBarLink";
import ThemeToggleButton from "@/app/components/navbar/ThemeToggleButton";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavBarListItem from "@/app/components/navbar/NavBarListItem";

export default function NavBar() {
    const endpoints_array = [
        {
            section_id: "home",
            name: "Home"
        },
        {
            section_id: "experiences",
            name: "Experiences"
        },
        {
            section_id: "projects",
            name: "Projects"
        },
        {
            section_id: "about-me",
            name: "About Me"
        }
    ]

    const activeSection = useActiveSection(endpoints_array.map(endpoint => endpoint.section_id));

    function renderEndpoint() {
        return endpoints_array.map((endpoint, index) => (
            <NavBarLink key={index} text={endpoint.name} href={`#${endpoint.section_id}`} active={activeSection === endpoint.section_id} />
        ));
    }

    function renderCompressedEndpoint() {
        return endpoints_array.map((endpoint, index) => (
            <NavBarListItem key={index} title={endpoint.name} href={`#${endpoint.section_id}`} active={activeSection === endpoint.section_id} />
        ));
    }

    return (
        <>
            <div className="font-mono sticky top-0 z-50 w-full">
                {/* Gradient that goes from opaque at top to transparent at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-transparent pointer-events-none" />

                <div className="relative w-full mx-auto flex flex-row justify-between items-center py-10 px-10 sm:px-40">
                    <div>
                        <ProfilePhoto />
                    </div>
                    <div className="hidden md:flex min-h-[100%] flex-row gap-4 items-center">
                        {renderEndpoint()}

                        <ThemeToggleButton />
                    </div>
                    <div className="flex md:hidden min-h-[100%] flex flex-row gap-4 items-center">
                        <NavigationMenu className="[&>div]:left-auto [&>div]:right-0">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <Menu />
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <ul className="flex flex-col justify-center items-center p-1">
                                            {renderCompressedEndpoint()}
                                            <div className="flex flex-col gap-1 text-sm">
                                                <div className="leading-none">
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
            </div>
        </>
    )
}
