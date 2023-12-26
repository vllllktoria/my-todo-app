import React, {useState} from 'react';
import {Task} from "../Task/Task";
import {
    Search,
    TasksListWrapper,
    TasksPanelWrapper,
    TasksWrapperText
} from "./TasksList.styles";

export const TasksList = ({ tasks = [], onDelete, onUpdate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <TasksPanelWrapper>
            <Search
                type="text"
                placeholder="Search task"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TasksListWrapper>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))
                ) : (
                    <TasksWrapperText>No tasks</TasksWrapperText>
                )}
            </TasksListWrapper>
        </TasksPanelWrapper>
    );
};
