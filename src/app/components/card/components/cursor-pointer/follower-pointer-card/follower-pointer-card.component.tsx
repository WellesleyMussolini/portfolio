"use client"

import React from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence } from "framer-motion";
import { FollowPointer } from "../follow-pointer/follow-pointer.component";
import { PointerData } from "../pointer-data/pointer-data.component";
import { useFollowerPointerCard } from "./hooks/follower-pointer-card.hook";
import { IFollowerPointerCard } from "../types/pointer.types";

export const FollowerPointerCard = ({ children, className }: IFollowerPointerCard) => {
    const {x, y, ref, isInside, handleMouseMove, handleMouseEnter, handleMouseLeave} = useFollowerPointerCard();
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            style={{
                cursor: "none",
            }}
            ref={ref}
            className={cn("relative", className)}
        >
            <AnimatePresence>
                {isInside && <FollowPointer x={x} y={y} title={<PointerData title="Wellesley Mussolini" avatar="" />} />}
            </AnimatePresence>
            {children}
        </div>
    );
};