import {QueryClient, useMutation, useQuery} from "react-query";

export const useTaskMutations = () => {
    const tasksQuery = useQuery('tasks',
        () => JSON.parse(localStorage.getItem('tasks')) || []);

    const queryClient = new QueryClient();

    const addTaskMutation = useMutation(
        async (newTask) => {
            const updatedTasks = [
                ...(tasksQuery.data ? tasksQuery.data : []),
                { id: tasksQuery.data ? tasksQuery.data.length + 1 : 1, ...newTask },
            ];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('tasks');
                await tasksQuery.refetch();
            },
        }
    );

    const deleteTaskMutation = useMutation(
        async (taskId) => {
            const updatedTasks = tasksQuery.data.filter((task) => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('tasks');
                await tasksQuery.refetch();
            },
        }
    );

    const updateTaskMutation = useMutation(
        async (updatedTask) => {
            const updatedTasks = tasksQuery.data.map((task) =>
                task.id === updatedTask.id ? { ...task, ...updatedTask } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('tasks');
                await tasksQuery.refetch();
            },
        }
    );

    return { tasksQuery, addTaskMutation, deleteTaskMutation, updateTaskMutation };
};