import React from 'react';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

const List = ({ task, removeTask, index, editTask, saveEdit, isEditing, setEditText, editText }) => {
    return (
        <div className="task-item">
            {isEditing === index ? (
                <div className="edit-task">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(index)}>Save</button>
                </div>
            ) : (
                <div className="task-text">
                    {task}
                    <div>
                        <button onClick={() => editTask(index)}><EditBtn/></button>
                        <button onClick={() => removeTask(index)}><DeleteBtn/></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
