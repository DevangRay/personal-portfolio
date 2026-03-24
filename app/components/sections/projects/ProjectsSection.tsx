import BentoBox from "@/app/components/sections/projects/BentoBox";

export default function ProjectsSection() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-mono text-2xl sm:text-4xl font-bold">
                Featured Projects
            </h2>
            
            <BentoBox />
        </div>
    )
}