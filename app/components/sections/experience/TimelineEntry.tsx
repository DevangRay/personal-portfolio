"use client";

import { useState } from "react";
import { ExperienceEntry } from "@/types/resume-types";

export default function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div className="w-px flex-1 bg-border mt-1" />
            </div>

            <div className="pb-5 flex-1 min-w-0">
                <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className="w-full text-left group cursor-pointer hover:bg-red-50"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <p className="text-sm font-medium text-foreground">
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
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </button>

                {/* Expandable bullets */}
                {expanded && (
                    <ul className="mt-3 flex flex-col gap-1.5 border-l-2 border-border pl-3">
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