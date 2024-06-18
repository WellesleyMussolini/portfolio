"use client"

import React from 'react';
import { useChatBox } from '../../hooks/chat-box.hook';
import { ChatMessageType } from '../chat-message-type/chat-message-type.component';

export const ChatBox = () => {
  const { chat, handleSelect, chatBoxRef } = useChatBox();
  return (
    <div ref={chatBoxRef} className="flex flex-col h-full bg-white py-4 px-4 shadow-md sm:rounded-b-md overflow-y-auto pb-28 sm:pb-8 scroll-smooth">
      {chat.map((message, index) => <ChatMessageType
        key={index}
        message={message.text}
        sender={message.sender}
        isHidden={message.isHidden}
        onClick={() => message.id && handleSelect(message.id)}
      />
      )}
    </div>
  );
};