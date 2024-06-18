"use client"

import { useContext } from "@/context/context";
import { ChatBox } from "./components/chat-box/chat-box.component"
import { ChatHeader } from "./components/chat-header/chat-header.component"
import { useChatBot } from "./hooks/chat-bot.hook";

export const ChatBot = () => {
    const { chatVisibility } = useContext();
    const { animate, handleCloseChatBot } = useChatBot();
    return (
        <>
            {
                chatVisibility &&
                <div className={`
                    ${animate}
                    fixed h-full w-full z-30 duration-300
        
                    sm:w-80 sm:h-[420px] sm:rounded-md sm:right-10 sm:bottom-28 max-sm:top-0
                `}>
                    <ChatHeader handleCloseChatBot={handleCloseChatBot} />
                    <ChatBox />
                </div>
            }
        </>
    )
};