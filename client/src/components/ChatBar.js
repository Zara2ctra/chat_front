import React, {useContext, useState} from 'react';
import {Accordion, Card, ListGroup} from 'react-bootstrap'
import {Trash} from "react-bootstrap-icons";
import {Context} from "../index";

const ChatBar = () => {
    const {user} = useContext(Context)
    const [tags, setTags] = useState(user.tagList)

    const handleRemoveTag = async (tagID) => {
        user.removeTag(tagID);
        const newData = tags.filter(tag => {
            return tag !== tagID ? tag : null
        });
        setTags(newData);
    }

    return (
        <Accordion className='mt-4'>
            <ListGroup variant="flush">
                {tags.map((tag) => {
                    return (
                        <Card key={tag}>
                            <ListGroup.Item>{tag}</ListGroup.Item>
                            <button onClick={() => handleRemoveTag()} className='custom-table__action-btn'>
                                <Trash/>
                            </button>
                        </Card>
                    )
                })
                }
            </ListGroup>
        </Accordion>
    );
};

export default ChatBar;