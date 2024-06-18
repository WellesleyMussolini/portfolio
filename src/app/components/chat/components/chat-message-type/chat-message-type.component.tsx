"use client"

import { EnumMessageSenderType } from "../../types/chat-box.types";

export const ChatMessageType = ({ message, sender, isHidden, onClick }: any) => (
    <div className={`flex duration-300 animate-slide-up ${sender === EnumMessageSenderType.USER ? 'justify-end' : 'justify-start'}`}>
        <div className={`p-4 max-w-xs mt-4
        ${isHidden ? "hidden" : "visible"} 
        ${sender === EnumMessageSenderType.BOT && "bg-gray-200 rounded-lg"}
        ${sender === EnumMessageSenderType.USER && "bg-tertiary text-white rounded-lg"}
        ${sender === EnumMessageSenderType.ANSWER && "cursor-pointer ring-purple-900 ring-2 text-purple-900 rounded-3xl hover:bg-purple-900 hover:text-white duration-300"}
        `}
            onClick={onClick}>
            <p>{message}</p>
        </div>
    </div>
);