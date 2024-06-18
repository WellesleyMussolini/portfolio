"use client"

import { Card } from "@/app/components/card/card.component";
import { FollowerPointerCard } from "@/app/components/card/components/cursor-pointer/follower-pointer-card/follower-pointer-card.component";
import { TextSlideUp } from "@/app/components/text-slide-up/text-slide-up.component";
import { useMediaQuery } from "@react-hooks-library/core";
import { projects } from "./mock/projects.mock";

export default function Projects() {
    const paddingTop = useMediaQuery('(max-height: 660px)');
    return (
        <div className={`flex items-center justify-center flex-col gap-5 pt-28 p-10 min-h-screen px-10`}>

            <div className="flex flex-wrap items-center justify-center gap-10">
                {
                    projects.map((project, index) => (
                        <FollowerPointerCard key={index} >
                            <Card project={project} />
                        </FollowerPointerCard>
                    ))
                }
            </div>
        </div>
    );
};

{/* <h1 className="text-white uppercase font-semibold text-3xl animate-fade-right w-full">Projects</h1> */}

{/* <TextSlideUp labelGap="" styles="uppercase font-semibold text-3xl"
labels={[
    { label: "P", styles: "text-white" },
    { label: "R", styles: "text-white" },
    { label: "O", styles: "text-white" },
    { label: "J", styles: "text-white" },
    { label: "E", styles: "text-white" },
    { label: "C", styles: "text-white" },
    { label: "T", styles: "text-white" },
    { label: "S", styles: "text-white" },
    ]}
    transitionDelay={45} animationDelay={60} /> */}