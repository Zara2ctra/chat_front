import React, {useContext, useState} from 'react';
import {Button, Form, OverlayTrigger, Tooltip} from "react-bootstrap"
import {RiSendPlaneFill} from 'react-icons/ri'
import {Context} from "../index";

export const ChatFooter = ({sendMessage}) => {
    const {user} = useContext(Context)
    const [text, setText] = useState('');
    const [showTooltip, setShowTooltip] = useState(false)

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        const tags = [];
        let messageText = "";
        const words = e.target[0].value.split(" ");

        for (const word of words) {
            if (word.startsWith("#") && word.endsWith("#")) {
                tags.push(word.slice(1, -1));
            } else if (word.startsWith("#")) {
                tags.push(...word.split("#").filter(tag => tag !== ""));
            } else if (word.endsWith("#")) {
                tags.push(word.slice(0, -1));
            } else {
                messageText += word + " ";
            }
        }

        if (tags) {
            user.setTags(tags)
        }

        sendMessage({messageText: messageText, tagList: tags})
        setText('')
    }

    return (
        <>
            <Form onSubmit={handleSendMessage}>
                <Form.Group className='d-flex'>
                    <OverlayTrigger
                        show={showTooltip}
                        placement="bottom"
                        overlay={
                        <Tooltip>
                            {`Format:
                              #yourtag Message
                              #yourtag#nextTeg Message`}
                        </Tooltip>}
                    >
                        <Form.Control
                            value={text}
                            onChange={handleChangeText}
                            onClick={() => setShowTooltip(!showTooltip)}
                            type='text'
                            placeholder='Message...'
                        />
                    </OverlayTrigger>
                    <Button variant='success' type='submit'>
                        <RiSendPlaneFill/>
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}