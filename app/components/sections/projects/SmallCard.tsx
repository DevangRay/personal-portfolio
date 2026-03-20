import { ProjectData } from "@/types/project-types"

export default function SmallCard({ project }: { project: ProjectData }) {
    return (
        <div className="w-full h-full bg-red-500">
            <span>
                {project.id}
            </span>
        </div>
    )
}