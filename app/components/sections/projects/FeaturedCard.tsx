"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/types/project-types";

export default function FeaturedCard({ project }: { project: ProjectData }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className="group relative flex flex-col h-full overflow-hidden rounded-xl cursor-pointer transition-transform duration-200 ease-out md:hover:-translate-y-0.5 md:hover:translate-x-0.5 active:-translate-y-0.5 active:translate-x-0.5">

            {/* Gradient blobs */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.7_0.15_280)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.4_0.15_280)_0%,_transparent_60%)] opacity-50 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.75_0.12_220)_0%,_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.35_0.12_220)_0%,_transparent_60%)] opacity-50 pointer-events-none" />

            {/* Glass layer */}
            <div className="absolute inset-0 border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl pointer-events-none" />

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
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col gap-3 p-4 md:p-6">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-row sm:flex-row justify-between sm:justify-start items-center sm:items-center gap-3 sm:gap-4">
                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-sm font-medium px-4 py-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                            >
                                View live site
                            </Link>
                        )}
                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-sm text-muted-foreground border-b border-border hover:text-foreground transition-colors pb-px"
                            >
                                GitHub →
                            </Link>
                        )}
                    </div>
                </div>

                {/* Screenshot */}
                <div className="relative mx-4 mb-4 rounded-lg overflow-hidden border border-border border-red">
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
            </div>
        </div>
    );
}