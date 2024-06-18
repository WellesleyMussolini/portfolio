"use client"

import { FaLongArrowAltRight } from "react-icons/fa";
import { ICard } from "./types/card.types";
import { BiSolidBadgeCheck } from "react-icons/bi";

export const Card = ({ project }: ICard) => (
    <div className={`flex flex-col gap-4 p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-600 shadow-md animate-fade min-[475px]:w-96`}>
        {/* max-w-2xl */}

        {/* top icon */}
        <div className="flex justify-between items-center text-gray-500">
            <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
                <BiSolidBadgeCheck size={14} className="text-sky-500" />
                {project.language}
            </span>
        </div>
        {/* top icon */}





        {/* TITULO */}
        <h2 className="max-xs:text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-white">{project.title}</h2>
        {/* TITULO */}



        {/* DESCRIPTION */}
        <p className="text-xs xs:text-sm sm:text-base font-light text-gray-400">{project.description}</p>
        {/* DESCRIPTION */}



        <div className="flex mt-1 justify-start gap-6 flex-wrap items-center text-white text-base">
            {project.technologies.map((technology, index) => (
                <p key={index} className="bg-purple-500/20 py-1 px-2 rounded-md max-xs:text-xs xs:text-sm sm:text-base">{technology}</p>
            ))}
        </div>



        {/* footer */}
        <a
            href="#"
            className="text-xs xs:text-sm sm:text-base cursor-none inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2" >
            Try out
            <FaLongArrowAltRight size={14} />
        </a>
        {/* footer */}
    </div>
);
