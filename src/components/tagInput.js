import React, {useContext, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Context} from '../index';
import {BsPlusCircle} from "react-icons/bs";

const TagInput = () => {
    const {user} = useContext(Context);
    const [tagInput, setTagInput] = useState('');

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
                <Form.Control
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyPress={handleKeyPress}
                    type='text'
                    placeholder='Add Tag...'
                />
                <Button variant='success' onClick={handleAddTag}>
                    <BsPlusCircle/>
                </Button>
        </Form.Group>
    );
};

export default TagInput;