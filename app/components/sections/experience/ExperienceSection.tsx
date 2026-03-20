import PDFRenderer from "@/app/components/sections/experience/PDFRenderer";

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