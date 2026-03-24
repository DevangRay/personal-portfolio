import { cn } from "@/lib/utils";

export default function Pill({ skill, className }: { skill: string, className?: string }) {
    function capitalizeString(string: string) {
        const capitalized_words = string.split(" ").map((word) => {
            return word.charAt(0).toLocaleUpperCase() + word.slice(1)
        })

        return capitalized_words.join(" ");
    }

    return (
        <>
            <span
                className={cn("text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border cursor-default", className)}
            >
                {capitalizeString(skill)}
            </span>
        </>
    )
}