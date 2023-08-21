import React, {useContext, useState} from 'react';
import {Button, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Context} from '../index';
import {BsPlusCircle} from "react-icons/bs";

const TagInput = () => {
    const {user} = useContext(Context);
    const [tagInput, setTagInput] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleAddTag = () => {
        const newTag = tagInput.split(" ");

        if (newTag) {
            user.setTags(newTag);
        }

        setTagInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddTag();
        }
    };

    return (
        <Form.Group className='d-flex'>
            <OverlayTrigger
                show={showTooltip}
                placement="bottom"
                overlay={
                    <Tooltip>
                        {`Add your tag without  #`}
                    </Tooltip>}
            >
                <Form.Control
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyPress={handleKeyPress}
                    onClick={() => setShowTooltip(!showTooltip)}
                    type='text'
                    placeholder='Add Tag...'
                />
                </OverlayTrigger>
                <Button variant='success' onClick={handleAddTag}>
                    <BsPlusCircle/>
                </Button>
        </Form.Group>
);
};

export default TagInput;