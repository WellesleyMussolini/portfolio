"use client"

import React from "react";
import { EnumAnswerIdType, EnumMessageSenderType, EnumTextMe, IChatMessage } from "../types/chat-box.types";
import { useRouter } from "next/navigation";

export const useChatBox = () => {
    const [chat, setChat] = React.useState<Array<IChatMessage>>([
        { sender: EnumMessageSenderType.BOT, text: 'Hi!' },
        { sender: EnumMessageSenderType.BOT, text: "I'm Wellesley Bot. I'm here to help you with any questions you might have about Wellesley's work." },
        { sender: EnumMessageSenderType.BOT, text: 'How can I help you today?' },
        { id: EnumAnswerIdType.HIRE, sender: EnumMessageSenderType.ANSWER, text: "We'd like to hire you", isHidden: false },
    ]);

    const chatBoxRef = React.useRef<HTMLDivElement>(null);
    const router = useRouter();

    // scrolls the chat to the last message
    React.useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [chat]);

    // Adds new messages to the chat with a delay of 1 second between each message.
    const addNewMessages = (newMessages: Array<IChatMessage>) => {
        newMessages.forEach((message, index) => {
            setTimeout(() => {
                setChat(prevChat => [...prevChat, message]);
            }, index * 1000);
        });
    };

    // Creates a message object pattern.
    const createMessage = (sender: EnumMessageSenderType, text: string, id?: string, isHidden = false): IChatMessage => ({
        sender,
        text,
        id,
        isHidden
    });

    // Hides messages by setting isHidden to true for messages with matching ids.
    const hideMessagesByIds = (ids: string[]) => {
        setChat(prevChat => prevChat.map(message =>
            ids.includes(message.id || "") ? { ...message, isHidden: true } : message
        ));
    };

    const handleSelect = (id: string) => {
        switch (id) {
            case EnumAnswerIdType.HIRE:
                hideMessagesByIds([EnumAnswerIdType.HIRE]);
                addNewMessages([
                    createMessage(EnumMessageSenderType.USER, "We'd like to hire you"),
                    createMessage(EnumMessageSenderType.BOT, "Ok, great!"),
                    createMessage(EnumMessageSenderType.BOT, "Send me a message and let's chat further!"),
                    createMessage(EnumMessageSenderType.ANSWER, "Send a WhatsApp message", EnumAnswerIdType.TEXT_ME),
                    createMessage(EnumMessageSenderType.ANSWER, "Send an email", EnumAnswerIdType.EMAIL),
                    createMessage(EnumMessageSenderType.ANSWER, "Other options?", EnumAnswerIdType.OTHER_OPTIONS)
                ]);
                break;

            case EnumAnswerIdType.TEXT_ME:
                router.push(EnumTextMe.WHATSAPP);
                break;

            case EnumAnswerIdType.EMAIL:
                window.location.href = EnumTextMe.EMAIL;
                break;

            case EnumAnswerIdType.OTHER_OPTIONS:
                hideMessagesByIds([EnumAnswerIdType.TEXT_ME, EnumAnswerIdType.EMAIL, EnumAnswerIdType.OTHER_OPTIONS]);
                addNewMessages([
                    createMessage(EnumMessageSenderType.USER, "Other options?"),
                    createMessage(EnumMessageSenderType.BOT, "Ok, here you go"),
                    createMessage(EnumMessageSenderType.ANSWER, "We'd like to hire you", EnumAnswerIdType.HIRE)
                ]);
                break;

            default:
                setChat(prevChat => prevChat.map(msg => msg.id === id ? { ...msg, isHidden: true } : msg));
        }
    };

    return { chat, handleSelect, chatBoxRef };
};