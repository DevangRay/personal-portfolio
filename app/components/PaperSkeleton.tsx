export default function PaperSkeleton() {
    return (
        <div
            className="bg-white dark:bg-neutral-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2),0_2px_8px_rgba(0,0,0,0.12)]"
            style={{ width: 460, height: 595 }}
        >
            <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200/60 dark:via-neutral-300/20 to-transparent animate-[shimmer_1.6s_infinite]" />
                <div className="p-8 flex flex-col gap-4">
                    <div className="h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-3/4 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-2/3 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-px w-full bg-neutral-200 dark:bg-neutral-300/20 my-2" />
                    <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-4/5 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-3/4 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-px w-full bg-neutral-200 dark:bg-neutral-300/20 my-2" />
                    <div className="h-3 w-2/5 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-5/6 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-px w-full bg-neutral-200 dark:bg-neutral-300/20 my-2" />
                    <div className="h-3 w-1/3 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-300/30" />
                    <div className="h-3 w-2/3 rounded bg-neutral-200 dark:bg-neutral-300/30" />
                </div>
            </div>
        </div>
    );
}