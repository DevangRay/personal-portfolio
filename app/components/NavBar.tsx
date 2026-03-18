import ProfilePhoto from "@/app/components/ProfilePhoto";
import NavBarLink from "@/app/components/NavBarLink";

export default function NavBar() {
    return (
        <>
            <div className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background bg-pink-500 z-50 max-w-5xl mx-auto flex flex-row justify-between items-center py-5">
                <div>
                    <ProfilePhoto />
                </div>
                <div className="min-h-[100%] flex flex-row gap-4 items-center">
                    <NavBarLink text={"Projects"} />
                    <NavBarLink text={"Contact"} />
                    
                </div>
            </div>
        </>
    )
}