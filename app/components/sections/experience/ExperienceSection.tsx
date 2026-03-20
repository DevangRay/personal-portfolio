"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import PaperSkeleton from "@/app/components/PaperSkeleton";
import ResumeHighlights from "@/app/components/sections/experience/ResumeHighlights";

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
    const pdfRef = useRef<HTMLDivElement>(null);
    const [pdfHeight, setPdfHeight] = useState<number>(595);

    useEffect(() => {
        const el = pdfRef.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            setPdfHeight(entry.contentRect.height);
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold">
                Work Experience
            </h2>

            <div className="w-full flex flex-col sm:flex-row gap-4 items-start">
                {/* Resume pdf */}
                <div ref={pdfRef}>
                    <PDFRenderer />
                </div>

                {/* Right: Highlights */}
                <div
                    className="flex-1 border border-border flex flex-col overflow-hidden"
                    style={{ height: pdfHeight }}
                >
                    <ResumeHighlights />
                </div>
            </div>
        </div>
    );
}