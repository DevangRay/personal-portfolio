import Link from "next/link"

export default function NavBarLink({ text, href }: { text: string, href: string }) {
    return (
        <>
            <Link
                href={href}
                className="hover:text-red-500"
            >
                {text}
            </Link>
        </>
    )
}