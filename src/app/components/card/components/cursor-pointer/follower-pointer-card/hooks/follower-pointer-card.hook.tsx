"use  client"

import React from "react";
import { useMotionValue } from "framer-motion";

export const useFollowerPointerCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = React.useState<DOMRect | null>(null);
    const [isInside, setIsInside] = React.useState<boolean>(false); // Add this line

    React.useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            x.set(e.clientX - rect.left + scrollX);
            y.set(e.clientY - rect.top + scrollY);
        }
    };
    const handleMouseLeave = () => setIsInside(false);

    const handleMouseEnter = () => setIsInside(true);

    return { isInside, x, y, ref, handleMouseMove, handleMouseEnter, handleMouseLeave };
};