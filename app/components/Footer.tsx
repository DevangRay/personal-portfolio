import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


type SocialMediaLink = {
    href: string,
    name: string
}
export default function Footer() {
    const links = [
        {
            href: "https://github.com/DevangRay",
            name: "GitHub"
        },
        {
            href: "https://www.linkedin.com/in/DevangRay",
            name: "LinkedIn"
        }
    ] as SocialMediaLink[];

    function renderSocialMediaLinks() {
        return links.map((social_media) => (
            <Button key={social_media.name} variant="link">
                <Link
                    target="_blank"
                    href={social_media.href}
                    rel="noreferrer noopener"
                    className="flex flow-row gap-2 text-(--foreground) hover:text-(--secondary-text)"
                >
                    {social_media.name}
                    <ArrowUpRight />
                </Link>
            </Button>
        ))
    }

    return (
        <footer className="w-full border-t border-border px-16 py-4 text-sm text-(--foreground)">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between">
                <div>
                    {renderSocialMediaLinks()}
                </div>

                <span>© {new Date().getFullYear()} Devang Ray</span>
            </div>
        </footer>
    );
}