import ProfilePhoto from "@/app/components/ProfilePhoto";
import NavBarLink from "@/app/components/NavBarLink";
import ThemeToggleButton from "@/app/components/ThemeToggleButton";

export default function NavBar() {
    return (
        <>
            <div className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full mx-auto flex flex-row justify-between items-center py-5 px-20">
                <div>
                    <ProfilePhoto />
                </div>
                <div className="min-h-[100%] flex flex-row gap-4 items-center">
                    <NavBarLink text={"Projects"} />
                    <NavBarLink text={"Contact"} />
                    <ThemeToggleButton />
                </div>
            </div>
        </>
    )
}