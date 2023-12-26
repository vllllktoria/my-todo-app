import React, {useState} from 'react';
import {TaskModal} from "../TaskModal/TaskModal";
import {QueryClient, useMutation, useQuery} from "react-query";
import {AddButton, Title, Wrapper} from "./TodoApp.styles";
import {TasksList} from "../TaskList/TasksList";

export const TodoApp = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const tasks = useQuery('tasks',
        () => JSON.parse(localStorage.getItem('tasks')) || []);

    const queryClient = new QueryClient()

    const addTaskMutation = useMutation(
        async (newTask) => {
            const updatedTasks = [
                ...(tasks.data ? tasks.data : []),
                {id: tasks.data ? tasks.data.length + 1 : 1, ...newTask},
            ];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('tasks');
                await tasks.refetch();
            },
        }
    );

    const deleteTaskMutation = useMutation(
        async (taskId) => {
            const updatedTasks = tasks.data.filter((task) => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('tasks');
                await tasks.refetch();
            },
        }
    );

    const updateTaskMutation = useMutation(
        async (updatedTask) => {
            const updatedTasks = tasks.data.map((task) =>
                task.id === updatedTask.id ? {...task, ...updatedTask} : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('tasks');
                await tasks.refetch();
            },
        }
    );

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
            <AddButton onClick={() => openModal()}>Добавить задачу</AddButton>

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