import Image from "next/image";

export default function ContactSection() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold">
                About Me
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
                <div>
                    <p>
                        Hello! I'm Devang Ray, a full-stack developer passionate about building solutions and collaborating to develop truly-impactful solutions centered on its users.
                    </p>
                    <p>
                        I've been efficiently shipping new features for my whole career, meaning I'm very comfortable
                    </p>
                </div>

                <div className="min-w-1/2 flex justify-center items-center">
                    <Image
                        src="/images/icon.jpg"
                        alt="Devang Ray"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}