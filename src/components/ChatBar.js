import React, {useContext} from 'react';
import {Accordion, Button, Card, ListGroup} from 'react-bootstrap'
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
                        <Card key={tag} className='d-flex flex-row justify-content-sm-between'>
                            <ListGroup.Item style={{border: 0, margin: "5px"}}>{tag}</ListGroup.Item>
                            <Button
                                style={{borderRadius: "0 0.375rem 0.375rem 0"}}
                                onClick={() => handleRemoveTag(tag)}
                                className='custom-table__action-btn border'
                                variant="dark">
                                <Trash/>
                            </Button>
                        </Card>
                    )
                )
                }
            </ListGroup>
            <TagInput/>
        </Accordion>
    );
});

export default ChatBar;