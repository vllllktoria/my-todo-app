import React from 'react';
import {
    DeleteIcon,
    EditIcon,
    TaskButton,
    TaskButtons,
    TaskItem,
    TaskText
} from "./Task.styles";
import deleteIcon from "../../icons/Delete.png";
import editIcon from "../../icons/Edit.png";

export const Task = ({ task, onDelete, onUpdate }) => {
    return (
        <TaskItem>
            <TaskText>
                {task.title}
            </TaskText>
            <TaskButtons>
                <TaskButton onClick={() => onDelete(task.id)}>
                    <DeleteIcon src={deleteIcon}  />
                </TaskButton>
                <TaskButton onClick={() => onUpdate(task)}>
                    <EditIcon src={editIcon} />
                </TaskButton>
            </TaskButtons>
        </TaskItem>
    );
};

