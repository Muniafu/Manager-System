import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const AdminPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks').then(response => {
        setTasks(response.data);
        });
    }, []);

    const addTask = async (task) => {
        const { data } = await axios.post('/api/tasks', task);
        setTasks([...tasks, data]);
    };

    return (
        <div>
        <h1>Admin Dashboard</h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
        </div>
    );
};

export default AdminPage;