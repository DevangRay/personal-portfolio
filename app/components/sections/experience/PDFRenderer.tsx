"use client";

import { useCallback, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import PaperSkeleton from "@/app/components/PaperSkeleton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

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
        <div className="flex flex-col items-center gap-4">
            {/* Tray behind the paper */}
            <div className="bg-neutral-200 dark:bg-neutral-800 p-6">
                {isLoading && <PaperSkeleton />}

                <Document
                    file="/resources/Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={""}
                >
                    <Page
                        pageNumber={currentPage}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        width={460}
                        className="shadow-[0_8px_30px_rgba(0,0,0,0.2),0_2px_8px_rgba(0,0,0,0.12)]"
                    />
                </Document>
            </div>

            {/* Controls sit below the paper, not inside the tray */}
            {numPages > 1 && (
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage <= 1}
                        className="text-sm px-3 py-1 rounded-md border border-border disabled:opacity-30 hover:bg-muted transition-colors"
                    >
                        ←
                    </button>
                    <span className="text-sm text-muted-foreground">
                        {currentPage} / {numPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                        disabled={currentPage >= numPages}
                        className="text-sm px-3 py-1 rounded-md border border-border disabled:opacity-30 hover:bg-muted transition-colors"
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    )
}