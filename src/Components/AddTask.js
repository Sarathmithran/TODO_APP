import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [value, setValue] = useState('');

    const addNewTask = () => {
        if (value.trim()) {
            addTask(value);
            setValue('');
        }
    };

    return (
        <div className="add-task">
            <input
                type="text"
                placeholder="Enter your task.."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={addNewTask}>Add</button>
        </div>
    );
};

export default AddTask;
