"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/types/project-types";
import Pill from "@/app/components/Pill";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BLOB_COLOR_PAIRS = [
    // 1) red to blue
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.7_0.2_15)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.45_0.2_15)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.12_220)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.35_0.12_220)_0%,_transparent_60%)]",
    },
    // 2) orange to purple
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.75_0.18_50)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.45_0.18_50)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.7_0.15_280)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.4_0.15_280)_0%,_transparent_60%)]",
    },
    // 3) pink to teal
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.75_0.18_340)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.45_0.18_340)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.15_185)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.45_0.15_185)_0%,_transparent_60%)]",
    },
    // 4) green to yellow
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.75_0.15_160)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.45_0.15_160)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.8_0.17_100)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.5_0.17_100)_0%,_transparent_60%)]",
    },
    // 5) yellow to green
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.8_0.17_100)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.5_0.17_100)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.15_160)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.45_0.15_160)_0%,_transparent_60%)]",
    },
    // 6) blue to orange
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.75_0.12_220)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.35_0.12_220)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.18_50)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.45_0.18_50)_0%,_transparent_60%)]",
    },
    // 7) teal to pink
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.75_0.15_185)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.45_0.15_185)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.18_340)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.45_0.18_340)_0%,_transparent_60%)]",
    },
    // 8) purple to red
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.7_0.15_280)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.4_0.15_280)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.7_0.2_15)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.45_0.2_15)_0%,_transparent_60%)]",
    },
    // 9) coral to indigo
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.75_0.18_25)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.45_0.18_25)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.7_0.18_255)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.4_0.18_255)_0%,_transparent_60%)]",
    },
    // 10) indigo to coral
    {
        a: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.7_0.18_255)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.4_0.18_255)_0%,_transparent_60%)]",
        b: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.18_25)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.45_0.18_25)_0%,_transparent_60%)]",
    },
];

function pickBlobPair(id: string) {
    const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return BLOB_COLOR_PAIRS[hash % BLOB_COLOR_PAIRS.length];
}

export default function BentoCard({ project, index, isFeature }: { project: ProjectData, index: number, isFeature: boolean }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const blobs = pickBlobPair(project.id);

    return (
        <div className="group relative flex flex-col h-full overflow-hidden rounded-xl cursor-pointer transition-transform duration-200 ease-out md:hover:-translate-y-0.5 md:hover:translate-x-0.5 active:-translate-y-0.5 active:translate-x-0.5">
            <a
                href={project.liveUrl ? project.liveUrl : project.githubUrl}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label={project.title}
                className="absolute inset-0 z-0"
            />

            {/* Gradient blobs */}
            <div className={`absolute inset-0 ${blobs.a} opacity-50 pointer-events-none`} />
            <div className={`absolute inset-0 ${blobs.b} opacity-50 pointer-events-none`} />

            {/* Glass layer */}
            <div className="absolute inset-0 border border-black/2 bg-black/5 dark:border-white/20 dark:bg-white/5 backdrop-blur-md rounded-xl pointer-events-none" />

            {/* Shimmer overlay */}
            <div
                className="absolute group-hover:animate-[shimmer-diagonal_0.6s_ease-in-out] pointer-events-none z-10"
                style={{
                    background: "linear-gradient(45deg, transparent 0%, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%, transparent 100%)",
                    transform: "translate(-50%, 50%)",
                    width: "200%",
                    height: "200%",
                    top: "-70%",
                    left: "-70%",
                }}
            />

            {/* Card content */}
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="h-full flex flex-col justify-between gap-4 p-4 md:p-6">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <Pill key={tag} skill={tag} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Screenshot */}
                        {
                            isFeature && (
                                <div className="relative mb-4 rounded-lg overflow-hidden border border-border border-red">
                                    {!imgLoaded && (
                                        <div className="absolute inset-0 bg-muted animate-pulse" />
                                    )}
                                    {project.screenshot && (
                                        <Image
                                            src={project.screenshot}
                                            alt={`${project.title} screenshot`}
                                            width={0}
                                            height={0}
                                            sizes="(max-width: 768px) 100vw, 66vw"
                                            className={`w-full h-auto transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                                            onLoad={() => setImgLoaded(true)}
                                        />
                                    )}
                                </div>
                            )
                        }

                        <div className="flex flex-row sm:flex-row justify-between sm:justify-start items-center sm:items-center gap-3 sm:gap-4 pointer-events-auto">
                            {project.liveUrl && (
                                <Button asChild variant="outline">
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-sm font-medium"
                                    >
                                        View live site
                                    </Link>
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button asChild variant="link">
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex flex-row items-center justify-center text-muted-foreground"
                                    >
                                        GitHub
                                        <ArrowUpRight />
                                    </Link>
                                </Button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}