import resumeData from "@/public/resources/resume_highlights.json"
import { ResumeData } from "@/types/resume-types";
import TimelineEntry from "@/app/components/sections/experience/TimelineEntry";
import Pill from "@/app/components/Pill";

const data = resumeData as ResumeData;
const colors = [
    "violet", "green", "blue", "red", "amber", "pink"
]
export default function ResumeHighlights() {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5">
                <span className="text-muted-foreground">Resume Highlights</span>
                <Pill skill={"auto-parsed"} className="bg-green-700 text-green-200"/>
            </div>
                <div className="w-7/8 border-b border-border mx-auto" />


            {/* Timeline */}
            <div className="flex-1 overflow-y-auto px-4 pt-4">
                {data.experience.map((entry, index) => (
                    <TimelineEntry
                        key={`${entry.company}-${entry.startDate}`}
                        entry={entry}
                        color={colors[index % colors.length]}
                    />
                ))}
            </div>

            {/* Skills */}
            <div className="px-4 shrink-0">
                <div className="w-7/8 border-t border-border mb-3 mx-auto" />
                <p className="text-xs text-muted-foreground mb-2">Top Skills</p>
                <div className="flex flex-wrap gap-1.5">
                    {data.skills.map((skill) => (
                        <Pill key={skill} skill={skill} className="bg-zinc-100 dark:bg-zinc-700"/>
                    ))}
                </div>
            </div>
        </div>
    );
}