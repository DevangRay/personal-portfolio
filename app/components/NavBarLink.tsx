export default function NavBarLink({text}: {text: string}) {
    return (
        <>
            <span className="hover:text-red-500">
                {text}
            </span>
        </>
    )
}