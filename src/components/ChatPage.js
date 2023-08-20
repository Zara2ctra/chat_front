import React from 'react';
import ChatBar from './ChatBar';
import { ChatFooter } from './ChatFooter';
import {MessageList} from "./MessageList";
import useChat from "../hooks/useChat";

const ChatPage = () => {
    const startChat = useChat();

    return (
        <div className="chat d-flex justify-content-between mt-5" >
            <ChatBar />
            <div className="chat__main" style={{width: "450px"}}>
                <MessageList messages={startChat.messages} />
                <ChatFooter sendMessage={startChat.sendMessage}/>
            </div>
        </div>
    );
};

export default ChatPage;