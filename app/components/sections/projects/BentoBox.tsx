import projectData from "@/public/resources/projects.json";
import { ProjectData } from "@/types/project-types";
import FeaturedCard from "@/app/components/sections/projects/FeaturedCard";
import SmallCard from "@/app/components/sections/projects/SmallCard";

const data = projectData as ProjectData[];
const featured = data.find((datum) => datum.featured);
const others = data.filter((datum) => !datum.featured);
export default function BentoBox() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-4">
            {featured && (
                <div className="md:col-span-4 md:row-span-2">
                    <FeaturedCard project={featured} />
                </div>
            )}

            {/* WILL HAVE TO PLAY WITH GRIDS MANUALLY DEPENDING ON PROJECT */}
            {others.map((project) => (
                <div
                    key={project.id}
                    style={{ gridColumn: `span ${project.span}` }}
                    className="md:[grid-column:var(--span)]"
                >
                    <SmallCard project={project} />
                </div>
            ))}
        </div>
    );
}