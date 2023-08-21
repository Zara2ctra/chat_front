import {useRef, useEffect, useContext, useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import { MessageListItem } from './MessageListItem'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const listStyles = {
    height: '80vh',
    border: '1px solid rgba(0,0,0,.4)',
    borderRadius: '4px',
    overflow: 'auto'
}

export const MessageList = observer(({messages}) => {
    const {user} = useContext(Context);
    const currentTags = user.tagList;

    const currentMessages = messages.filter((messageObj) => {
        const messageTags = messageObj.tagList;
        if (messageTags) {
            const parsedTags = messageTags
                .replace("[", "")
                .replace("]", "")
                .split(" ")
                .filter(tag => tag !== '');
            return parsedTags.some((tag) => currentTags.includes(tag));
        } else {
            return true;
        }
    });

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])

    return (
        <>
            <ListGroup variant='flush' style={listStyles}>
                {currentMessages.map((msg) => (
                    <MessageListItem
                        key={msg.id}
                        msg={msg}
                    />
                ))}
                <span ref={messagesEndRef}></span>
            </ListGroup>
        </>
    )
})