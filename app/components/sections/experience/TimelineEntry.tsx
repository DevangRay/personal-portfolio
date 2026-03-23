"use client";

import { useState } from "react";
import { ExperienceEntry } from "@/types/resume-types";
import Pill from "../../Pill";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { bg: string; pill_background: string; text: string, border: string }> = {
    red: { bg: "bg-red-500", pill_background: "bg-red-100", text: "text-red-500", border: "border-red-100" },
    amber: { bg: "bg-amber-500", pill_background: "bg-amber-100", text: "text-amber-500", border: "border-amber-100" },
    green: { bg: "bg-green-500", pill_background: "bg-green-100", text: "text-green-800", border: "border-green-100" },
    blue: { bg: "bg-blue-500", pill_background: "bg-blue-100", text: "text-blue-500", border: "border-blue-100" },
    violet: { bg: "bg-violet-500", pill_background: "bg-violet-100", text: "text-violet-500", border: "border-violet-100" },
    pink: { bg: "bg-pink-500", pill_background: "bg-pink-100", text: "text-pink-500", border: "border-pink-100" },
};
export default function TimelineEntry({ entry, color }: { entry: ExperienceEntry, color: string }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className={cn("w-2 h-2 rounded-full mt-1.5 shrink-0", colorMap[color].bg)} />
                <div className="w-px flex-1 bg-border mt-1" />
            </div>

            <div className="flex-1 min-w-0">
                <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className="w-full text-left group cursor-pointer hover:bg-muted p-2 pt-0"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                {entry.role}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {entry.company}
                            </p>
                            <p className="text-xs text-muted-foreground/70 mt-0.5">
                                {entry.startDate} – {entry.endDate}
                            </p>
                        </div>
                        <span className="text-muted-foreground/50 text-xs mt-1 shrink-0 group-hover:text-muted-foreground transition-colors">
                            {expanded ? "↑" : "↓"}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {entry.tags.map((tag) => (
                            <Pill key={tag} skill={tag} className={`${colorMap[color].pill_background} ${colorMap[color].text}`} />
                        ))}
                    </div>
                </button>

                {/* Expandable bullets */}
                {expanded && (
                    <ul className={cn("mt-3 flex flex-col gap-1.5 border-l-2 border-border pl-3", colorMap[color].border)}>
                        {entry.bullets.map((bullet, i) => (
                            <li
                                key={i}
                                className="text-xs text-muted-foreground leading-relaxed"
                            >
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}