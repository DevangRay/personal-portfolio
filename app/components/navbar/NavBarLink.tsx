import Link from "next/link"

export default function NavBarLink({ text, href, active }: { text: string, href: string, active: boolean }) {
    return (
        <>
            <Link
                href={href}
                className={
                    `
                    ${
                        active
                        ? "text-(--secondary-text) font-semibold border-b-2 border-(--secondary-text)"
                        : "text-(--muted-foreground) hover:text-(--foreground)"
                    }
                    `
                }
            >
                {text}
            </Link>
        </>
    )
}