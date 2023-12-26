import React, {useState} from 'react';
import {Input, ModalButton} from "../TaskModal/TaskModal.styles";
import {TaskModal} from "../TaskModal/TaskModal";

export const TaskAlert = ({modalOpen, onSave, closeModal }) => {
    const [title, setTitle] = useState('');
    const handleSave = () => {
        onSave(title);
        setTitle('');
        closeModal();
    };

    return (
        <>
            {modalOpen && (
                <TaskModal close={closeModal}>
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task"
                        autoFocus
                    />
                    <ModalButton onClick={handleSave}>Save</ModalButton>
                </TaskModal>
            )}
        </>
    );
};
