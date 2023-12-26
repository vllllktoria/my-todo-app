import React, {useState} from 'react';
import {TaskModal} from "../TaskModal/TaskModal";
import {useQuery} from "react-query";
import {AddButton, Title, Wrapper} from "./TodoApp.styles";
import {TasksList} from "../TaskList/TasksList";
import {useTaskMutations} from "../../hooks/useTaskMutations";

export const TodoApp = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

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

    const handleDeleteTask = (taskId) => {
        deleteTaskMutation.mutate(taskId);
    };

    const handleUpdateTask = (task) => {
        openModal(task);
    };

    return (
        <Wrapper>
            <Title>TODO</Title>
            <AddButton onClick={() => openModal()}>Add task</AddButton>

            <TasksList tasks={tasks.data} onDelete={handleDeleteTask} onUpdate={handleUpdateTask}/>

            {modalOpen && (
                <TaskModal
                    close={closeModal}
                    onSave={(title) => {
                        if (selectedTask) {
                            updateTaskMutation.mutate({id: selectedTask.id, title});
                        } else {
                            handleAddTask({title});
                        }
                    }}
                    onCancel={closeModal}
                />
            )}
        </Wrapper>
    );
};