import { ProjectData } from "@/types/project-types"

export default function FeaturedCard({ project }: { project: ProjectData }) {
    return (
        <div className="w-full h-full bg-green-500">
            <span>
                {project.id}
            </span>
        </div>
    )
}