import React from 'react';
import {Backdrop, Input, ModalButton, ModalWrapper} from "./TaskModal.styles";

export const TaskModal = ({ close, children }) => {
    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    };

    return (
        <Backdrop onClick={close}>
            <ModalWrapper onClick={contentComponentClickHandle}>
                {children}
            </ModalWrapper>
        </Backdrop>
    );
};