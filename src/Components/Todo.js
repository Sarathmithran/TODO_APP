import React, { useState } from 'react';
import AddTask from './AddTask';
import List from './List';

const Todo = () => {
    const [task, setTask] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [editText, setEditText] = useState('');

    const addTask = (newtask) => {
        const newTask = [...task, newtask];
        setTask(newTask);
    };

    const removeTask = (index) => {
        const newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
    };

    const editTask = (index) => {
        setIsEditing(index);
        setEditText(task[index]);
    };

    const saveEdit = (index) => {
        const newTask = [...task];
        newTask[index] = editText;
        setTask(newTask);
        setIsEditing(null);
        setEditText('');
    };

    return (
        <div className='main'>
            <h3>TODO APP</h3>
            <div className="add-task-container">
                <AddTask addTask={addTask} />
            </div>
            <div className="task-list">
                {
                    task.map((t, index) => {
                        return (
                            <List
                                key={index}
                                task={t}
                                index={index}
                                removeTask={removeTask}
                                editTask={editTask}
                                saveEdit={saveEdit}
                                isEditing={isEditing}
                                setEditText={setEditText}
                                editText={editText}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Todo;
