import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import TaskList from '../components/TaskList';

const EmployeePage = () => {
    const [tasks, setTasks] = useState([]);
    const socket = io.connect('http://localhost:5000');

    useEffect(() => {
        axios.get('/api/tasks/assigned').then(response => {
        setTasks(response.data);
        });

        socket.on('taskUpdated', (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
        );
        });

        return () => socket.disconnect();
    }, [socket]);

    const updateTaskStatus = async (taskId, status) => {
        await axios.put(`/api/tasks/${taskId}`, { status });
    };

    return (
        <div>
        <h1>Employee Dashboard</h1>
        <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
        </div>
    );
};

export default EmployeePage;