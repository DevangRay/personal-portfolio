import Link from "next/link"

export default function NavBarLink({ text, href, active }: { text: string, href: string, active: boolean }) {
    return (
        <>
            <Link
                href={href}
                className={
                    `
                    hover:text-red-500
                    ${
                        active
                        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-900"
                    }
                    `
                }
            >
                {text}
            </Link>
        </>
    )
}