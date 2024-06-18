import React from "react";
import { Header } from "../header/header.layout";
import { ChatBot } from "../../components/chat/chat-bot.component";


export const LayoutWrapper = () => (
    <>
        <Header />
        <ChatBot />
    </>
);