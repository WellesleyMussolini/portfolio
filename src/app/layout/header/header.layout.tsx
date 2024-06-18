"use client"

import Link from "next/link";
import { Navigation } from "./components/navigation.component";

export const Header = () => {
    return (
        <div className="fixed z-20 bg-black top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full h-24">
            <div className="fixed flex items-center justify-between z-20 w-[640px] px-12 max-sm:w-full">
                <Link href={"/"} className="text-white">LOGO</Link>
                <Navigation />
            </div>
        </div>
    );
};