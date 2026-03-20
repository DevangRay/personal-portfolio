"use client";

import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PaperSkeleton from "@/app/components/sections/experience/PaperSkeleton";
import resumeData from "@/public/resources/resume_highlights.json";
import { ResumeData } from "@/types/resume-types";
import { parseDate } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

const data = resumeData as ResumeData;

export default function PDFRenderer() {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onDocumentLoadSuccess = useCallback(
        ({ numPages }: { numPages: number }) => {
            setNumPages(numPages);
            setIsLoading(false);
        }, []
    );

    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border border-b-0 border-border">
                <span className="text-xs text-muted-foreground">
                    Last updated {parseDate(data.lastUpdated)}
                </span>

                <Button>
                    <a
                        href="/resources/Resume.pdf"
                        download
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Download
                    </a>
                </Button>
            </div>

            {/* Tray behind the paper */}
            <div className="bg-neutral-200 dark:bg-neutral-800 p-6">
                {isLoading && <PaperSkeleton />}
                <Document
                    file="/resources/Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading=""
                >
                    <Page
                        pageNumber={currentPage}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        width={460}
                        className={isLoading ? "hidden" : "shadow-[0_8px_30px_rgba(0,0,0,0.2),0_2px_8px_rgba(0,0,0,0.12)]"}
                    />
                </Document>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-4 py-2.5 border border-t-0 border-border">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage <= 1}
                    className="text-sm px-3 py-1 rounded-md border border-border disabled:opacity-30 hover:bg-muted transition-colors"
                >
                    ←
                </button>
                <span className="text-sm text-muted-foreground">
                    {numPages > 0 ? `${currentPage} / ${numPages}` : "—"}
                </span>
                <button
                    onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                    disabled={currentPage >= numPages}
                    className="text-sm px-3 py-1 rounded-md border border-border disabled:opacity-30 hover:bg-muted transition-colors"
                >
                    →
                </button>
            </div>
        </div>
    )
}