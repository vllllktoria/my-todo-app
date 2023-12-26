import React, {useState} from 'react';
import {useQuery} from "react-query";
import {
    AddButton,
    ConfirmButton,
    ConfirmText,
    DeleteConfirm,
    DeleteConfirmBack,
    Title,
    Wrapper
} from "./TodoApp.styles";
import {TasksList} from "../TaskList/TasksList";
import {useTaskMutations} from "../../hooks/useTaskMutations";
import {TaskAlert} from "../TaskAlert/TaskAlert";

export const TodoApp = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState(null);

    const tasks = useQuery('tasks',
        () => JSON.parse(localStorage.getItem('tasks')) || []);

    const {
        addTaskMutation,
        deleteTaskMutation,
        updateTaskMutation
    } = useTaskMutations();

    const openModal = (task = null) => {
        setSelectedTask(task);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedTask(null);
        setModalOpen(false);
    };

    const handleAddTask = (newTask) => {
        addTaskMutation.mutate(newTask);
        closeModal();
    };

    const handleUpdateTask = (task) => {
        openModal(task);
    };

    const confirmDelete = (taskId) => {
        setTaskIdToDelete(taskId);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteConfirmation = () => {
        deleteTaskMutation.mutate(taskIdToDelete);
        setShowDeleteConfirmation(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    return (
        <Wrapper>
            <Title>TODO</Title>
            <AddButton onClick={() => openModal()}>Add task</AddButton>

            <TasksList tasks={tasks.data} onDelete={confirmDelete} onUpdate={handleUpdateTask}/>

            {modalOpen && (
                <TaskAlert
                    modalOpen={modalOpen}
                    onSave={(title) => {
                        if (selectedTask) {
                            updateTaskMutation.mutate({ id: selectedTask.id, title });
                        } else {
                            handleAddTask({ title });
                        }
                    }}
                    closeModal={closeModal}
                />
            )}

            {showDeleteConfirmation && (
                <DeleteConfirmBack>
                    <DeleteConfirm>
                        <ConfirmText>Delete this task?</ConfirmText>
                        <ConfirmButton onClick={handleDeleteConfirmation}>Yes</ConfirmButton>
                        <ConfirmButton onClick={handleCancelDelete}>No</ConfirmButton>
                    </DeleteConfirm>
                </DeleteConfirmBack>
            )}
        </Wrapper>
    );
};