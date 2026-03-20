import { ProjectData } from "@/types/project-types"

export default function SmallCard({ project }: { project: ProjectData }) {
    return (
        <div className="group w-full h-full rounded-sm p-4 transition-transform duration-200 ease-out hover:md:-translate-y-0.5 hover:md:translate-x-0.5 active:md:translate-y-0 active:-translate-y-0.5 active:translate-x-0.5 cursor-pointer bg-red-500 relative overflow-hidden">
            {/* Shimmer overlay */}
            <div
                className="absolute group-hover:animate-[shimmer-diagonal_0.6s_ease-in-out] pointer-events-none"
                style={{
                    background: "linear-gradient(45deg, transparent 0%, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%, transparent 100%)",
                    transform: "translate(-50%, 50%)",
                    width: "200%",
                    height: "200%",
                    top: "-70%",
                    left: "-70%",
                }}
            />

            <h3 className="text-xl font-bold">
                {project.title}
            </h3>
            <p>
                {project.description}
            </p>
        </div>
    )
}