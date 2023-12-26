import React, {useState} from 'react';
import {Backdrop, Input, ModalButton, ModalWrapper} from "./TaskModal.styles";

export const TaskModal = ({ onSave, close }) => {
    const [title, setTitle] = useState('');
    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }

    const handleSave = () => {
        onSave(title);
        setTitle('');
        close();
    };

    return (
        <Backdrop onClick={close}>
            <ModalWrapper onClick={contentComponentClickHandle}>
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task"
                    autoFocus
                />
                <ModalButton onClick={handleSave}>Save</ModalButton>
            </ModalWrapper>
        </Backdrop>
    );
};
