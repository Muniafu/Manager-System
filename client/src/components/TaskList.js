import React from 'react';

const TaskList = ({ tasks, updateTaskStatus }) => {
    return (
        <div>
        <h2>Tasks</h2>
        <ul>
            {tasks.map((task) => (
            <li key={task._id}>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                {updateTaskStatus && (
                <div>
                    <button onClick={() => updateTaskStatus(task._id, 'in-progress')}>In Progress</button>
                    <button onClick={() => updateTaskStatus(task._id, 'completed')}>Completed</button>
                </div>
                )}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TaskList;