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
const rotations = [0, 7, -3, 5];
// const rotations = [5, -3, 7, -1];

export default function PhotoStack() {
    const [order, setOrder] = useState<number[]>(photos.map((_, i) => i));
    const [hovered, setHovered] = useState(false);

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
                const isTop = stackPos === order.length - 1;
                const depthIndex = stackPos;
                const rotation = rotations[order.length - 1 - stackPos];

                return (
                    <div
                        key={photoIndex}
                        onClick={isTop ? cycleTop : undefined}
                        onMouseEnter={isTop ? () => setHovered(true) : undefined}
                        onMouseLeave={isTop ? () => setHovered(false) : undefined}
                        className="absolute inset-0 px-5 pt-5 pb-15 bg-white border border-solid border-gray-100 rounded-xs transition-all duration-300 ease-out"
                        style={{
                            rotate: `${rotation}deg`,
                            zIndex: depthIndex,
                            cursor: isTop ? "pointer" : "default",
                            transformOrigin: "center center",
                            scale: isTop && hovered ? "1.04" : "1",
                            translate: isTop && hovered ? "0 -6px" : "0 0",
                            boxShadow: isTop && hovered
                                ? "0 20px 50px rgba(0,0,0,0.22), 0 6px 16px rgba(0,0,0,0.14)"
                                : "0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
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