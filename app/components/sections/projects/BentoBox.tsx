import projectData from "@/public/resources/projects.json";
import { ProjectData } from "@/types/project-types";
import FeaturedCard from "@/app/components/sections/projects/FeaturedCard";
import SmallCard from "@/app/components/sections/projects/SmallCard";

const data = projectData as ProjectData[];
const featured = data.find((datum) => datum.featured);
const others = data.filter((datum) => !datum.featured);
export default function BentoBox() {
    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                featured && (
                    <FeaturedCard project={featured} />
                )
            }
            <div className="grid grid-cols-1 gap-4">
                {
                    others.map((project, index) => (
                        <SmallCard key={index} project={project} />
                    ))

                }
            </div>
        </div>
    )
}