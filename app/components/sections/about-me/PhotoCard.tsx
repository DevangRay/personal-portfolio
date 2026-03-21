import Image from "next/image";

export default function PhotoCard({ src }: { src: string }) {
    return (
        <div className="w-full sm:rotate-[5deg] hover:rotate-[10deg] px-5 pt-5 pb-15 bg-white border-solid border-1 border-gray-100 shadow-xl rounded-xs">
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src="/images/icon.jpg"
                    alt="Devang Ray"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    )
}