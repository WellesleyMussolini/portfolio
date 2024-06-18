"use client"

import Image from "next/image";
import { IPointerData } from "../../types/card.types";

export const PointerData = ({title, avatar}: IPointerData) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);