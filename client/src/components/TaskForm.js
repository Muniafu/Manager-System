import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('/api/users/employees').then(response => {
        setEmployees(response.data);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, description, assignedTo };
        addTask(task);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" required />
        <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required>
            <option value="">Assign to Employee</option>
            {employees.map((employee) => (
            <option key={employee._id} value={employee._id}>{employee.name}</option>
            ))}
        </select>
        <button type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;