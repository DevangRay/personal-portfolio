"use client";

import dynamic from "next/dynamic";
import PaperSkeleton from "@/app/components/PaperSkeleton";

const PDFRenderer = dynamic(
    () => import("@/app/components/sections/experience/PDFRenderer"),
    {
        ssr: false,
        loading: () => (
            <div className="bg-neutral-200 dark:bg-neutral-800 p-6">
                <PaperSkeleton />
            </div>
        )
    }
);
export default function ExperienceSection() {
    return (
        <div className="w-full flex flex-row gap-4 items-start">
            {/* Resume pdf */}
            <PDFRenderer />
            {/* Experience */}
            <div className="flex-1 bg-green-500">
                Full
            </div>
        </div>
    )
}