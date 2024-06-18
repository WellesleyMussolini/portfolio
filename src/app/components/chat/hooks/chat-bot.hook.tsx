import { useContext } from "@/context/context";
import React from "react";

export const useChatBot = () => {
    const [animate, setAnimate] = React.useState<string>("animate-slide-up");
    const {setChatVisibility} = useContext();

    const handleCloseChatBot = () => {
        setAnimate("animate-slide-out");
        setTimeout(() => {
            setChatVisibility(false);
            setAnimate("animate-slide-up");
        }, 290);
    };
    return { animate, handleCloseChatBot };
};