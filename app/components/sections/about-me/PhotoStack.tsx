"use client";

import Image from "next/image";
import { useState } from "react";

interface Photo {
    src: string;
    alt: string;
}

const photos: Photo[] = [
    { src: "/images/icon.jpg", alt: "Devang Ray" },
    { src: "/images/hike.jpg", alt: "Tea Plantation in Kerala, India" },
    { src: "/images/horse.jpg", alt: "Horse!" },
    { src: "/images/rolls.jpg", alt: "Homemade Garlic Butter Rolls" },
];

// Fixed rotations per stack position (index 0 = top)
const rotations = [5, -3, 7, -1];

export default function PhotoStack() {
    const [order, setOrder] = useState<number[]>(photos.map((_, i) => i));

    const cycleTop = () => {
        setOrder((prev) => {
            const [top, ...rest] = prev;
            return [...rest, top];
        });
    };

    return (
        <div
            className="relative w-full aspect-square"
            style={{ perspective: "600px" }}
        >
            {[...order].reverse().map((photoIndex, stackPos) => {
                // stackPos 0 = bottom, stackPos (order.length - 1) = top
                const isTop = stackPos === order.length - 1;
                const depthIndex = stackPos; // higher = closer to top
                const rotation = rotations[order.length - 1 - stackPos]; // top gets rotations[0]

                return (
                    <div
                        key={photoIndex}
                        onClick={isTop ? cycleTop : undefined}
                        className="absolute inset-0 px-5 pt-5 pb-15 bg-white border border-solid border-gray-100 shadow-xl rounded-xs transition-all duration-500 ease-in-out"
                        style={{
                            rotate: `${rotation}deg`,
                            zIndex: depthIndex,
                            cursor: isTop ? "pointer" : "default",
                            transformOrigin: "center center",
                        }}
                    >
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src={photos[photoIndex].src}
                                alt={photos[photoIndex].alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}