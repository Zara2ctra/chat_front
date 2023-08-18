import React, {useState} from "react"
import {Card, ListGroup} from "react-bootstrap"

export const MessageListItem = (({msg}) => {
    const {messageText, tagList} = msg;
    console.log(messageText)
    return (
        <ListGroup.Item
            className={"d-flex"}
        >
            <Card
                bg={"secondary'"}
                text="black"
                style={{width: "80%"}}
            >
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Card.Text>{tagList}</Card.Text>
                </Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Text>{messageText}</Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
})

