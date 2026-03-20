import projectData from "@/public/resources/projects.json";
import { ProjectData } from "@/types/project-types";
import BentoCard from "@/app/components/sections/projects/BentoCard";

const data = projectData as ProjectData[];
const featured = data.find((datum) => datum.featured);
const others = data.filter((datum) => !datum.featured);
export default function BentoBox() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-4">
            {featured && (
                <div className="md:col-span-4 md:row-span-2">
                    <BentoCard project={featured} index={0} isFeature={true}/>
                </div>
            )}

            {/* WILL HAVE TO PLAY WITH GRIDS MANUALLY DEPENDING ON PROJECT */}
            {others.map((project, index) => (
                <div
                    key={index}
                    className={`col-span-1 md:col-span-${project.span}`}
                >
                    <BentoCard project={project} index={index} isFeature={false}/>
                </div>
            ))}
        </div>
    );
}