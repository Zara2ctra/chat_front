import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap"
import { RiSendPlaneFill } from 'react-icons/ri'

export const ChatFooter = ({sendMessage}) => {
    const [text, setText] = useState('');

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        //написать функция вычленения тега и текста
        const tagList = text
        const trimmed = text.trim()
        //написать функция вычленения тега и текста
        if (trimmed) {
            sendMessage({ messageText: text, senderTags: tagList })
            setText('')
        }
    }

    return (
        <>
            <Form onSubmit={handleSendMessage}>
                <Form.Group className='d-flex'>
                    <Form.Control
                        value={text}
                        onChange={handleChangeText}
                        type='text'
                        placeholder='Message...'
                    />
                    <Button variant='success' type='submit'>
                        <RiSendPlaneFill/>
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}