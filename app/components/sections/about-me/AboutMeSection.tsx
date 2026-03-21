import PhotoStack from "@/app/components/sections/about-me/PhotoStack";

export default function AboutMeSection() {
    return (
        <div className="flex flex-col sm:flex-row gap-6">
            {/* Texts */}
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl sm:text-4xl font-bold">
                    About Me
                </h2>

                <div className="flex flex-col gap-4">
                    <p>
                        Hello! I'm Devang Ray, a full-stack developer passionate about building user-friendly products that solve problems and create genuine value rather thn simply shipping solutions.
                    </p>
                    <p>
                        Over my career I've grown to thrive in both fast-paced environments where experimentation is valued, and in more mature and complex environments where developing resilient, available situations are crucial.
                    </p>
                    <p>
                        Separate from Software Developmnet, I love travelling, baking, and getting outside as often as I can!
                    </p>
                </div>
            </div>

            <div className="min-w-1/2 flex justify-center items-center">
                <PhotoStack />
            </div>
        </div>
    )
}