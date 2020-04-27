import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
    return (
        <div className = 'todo-item-wrapper'>
            <div className = 'todo-item-description'>
                <p className = {props.completed ? 'todo-item-completed' : ''}>{props.description}</p>
            </div>
            <div className = 'todo-item-input'>
                <label className = {props.completed ? 'todo-item-input-checked' : ''}>
                    <input
                        type = 'checkbox'
                        defaultChecked = {props.completed}
                        onChange = {props.stateChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default TodoItem;