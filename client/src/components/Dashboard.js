import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    // Fetch tasks from backend
    useEffect(() => {
        const fetchTasks = async () => {
        try {
            const res = await axios.get('/api/tasks'); // Adjust API endpoint as necessary
            setTasks(res.data);
        } catch (err) {
            setError('Unable to fetch tasks');
        }
        };
        fetchTasks();
    }, []);

    const handleTaskUpdate = async (taskId, status) => {
        try {
        await axios.put(`/api/tasks/${taskId}`, { status });
        setTasks(tasks.map(task => (task._id === taskId ? { ...task, status } : task)));
        } catch (err) {
        setError('Failed to update task');
        }
    };

    return (
        <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome, {user?.name}</h1>
        {error && <p className="error-message">{error}</p>}
        
        <div className="tasks-grid">
            {tasks.map((task) => (
            <div key={task._id} className="task-card">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p><strong>Status:</strong> {task.status}</p>
                {user.role === 'admin' && (
                <button
                    className="update-btn"
                    onClick={() => handleTaskUpdate(task._id, 'In Progress')}
                >
                    Mark In Progress
                </button>
                )}
                {user.role === 'employee' && (
                <button
                    className="update-btn"
                    onClick={() => handleTaskUpdate(task._id, 'Completed')}
                >
                    Mark Completed
                </button>
                )}
            </div>
            ))}
        </div>
        </div>
    );
};

export default Dashboard;