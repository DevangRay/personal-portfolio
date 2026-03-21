export default function HeroTitle() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8">
            <h1 className="text-6xl sm:text-8xl font-bold">
                Devang Ray
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-(--secondary-text)">
                Full Stack Developer
            </h2>
            <h3 className="text-xl sm:text-2xl text-(--muted-foreground)">
                Developer based in Washington DC.
            </h3>
        </div>
    )
}