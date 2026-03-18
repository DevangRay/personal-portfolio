"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggleButton({ className }: { className?: string }) {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function changeTheme() {
        // Use the resolvedTheme (actual applied theme) when available,
        // fall back to theme or 'light' to avoid a no-op on first click.
        const current = resolvedTheme ?? theme ?? "light";
        setTheme(current === "dark" ? "light" : "dark");
    }

    if (!mounted) {
        // Avoid mismatched UI before theme is resolved; disable toggling until mounted.
        return (
            <Button disabled variant="outline" size="icon" className={`cursor-pointer ${className}`}>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Wait for theme to load</span>
            </Button>
        );
    }

    return (
        <Button variant="outline" size="icon" className={`cursor-pointer ${className}`} onClick={changeTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
