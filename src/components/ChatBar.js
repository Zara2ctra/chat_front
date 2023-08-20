import React, {useContext, useEffect, useState} from 'react';
import {Accordion, Card, ListGroup} from 'react-bootstrap'
import {Trash} from "react-bootstrap-icons";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import TagInput from "./tagInput";

const ChatBar = observer(() => {
    const {user} = useContext(Context)

    const handleRemoveTag = async (tagID) => {
        user.removeTag(tagID);
        user.setTags(user.tagList.filter(tag => tag !== tagID));
    }

    return (
        <Accordion className='mt-4'>
            <ListGroup variant="flush">
                {user.tagList.map((tag) => (
                        <Card key={tag}>
                            <ListGroup.Item>{tag}</ListGroup.Item>
                            <button onClick={() => handleRemoveTag(tag)} className='custom-table__action-btn'>
                                <Trash/>
                            </button>
                        </Card>
                    )
                )
                }
            </ListGroup>
            <TagInput />
        </Accordion>
    );
});

export default ChatBar;