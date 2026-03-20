import resumeData from "@/public/resources/resume_highlights.json"
import { ResumeData } from "@/types/resume-types";
import TimelineEntry from "@/app/components/sections/experience/TimelineEntry";

const data = resumeData as ResumeData;
export default function ResumeHighlights() {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                <span className="text-xs text-muted-foreground">Resume Highlights</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                    auto-parsed
                </span>
            </div>

            {/* Timeline */}
            <div className="flex-1 overflow-y-auto px-4 pt-4">
                {data.experience.map((entry) => (
                    <TimelineEntry
                        key={`${entry.company}-${entry.startDate}`}
                        entry={entry}
                    />
                ))}
            </div>

            {/* Skills */}
            <div className="px-4 py-3 shrink-0">
                <div className="w-7/8 border-t border-border mb-3 mx-auto" />
                <p className="text-xs text-muted-foreground mb-2">Top Skills</p>
                <div className="flex flex-wrap gap-1.5">
                    {data.skills.map((skill) => (
                        <span
                            key={skill}
                            className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}