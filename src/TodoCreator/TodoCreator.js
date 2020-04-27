import React from 'react';
import './TodoCreator.css'

const TodoCreator = props => {

    const checkInputValue = () => {
        const input = document.getElementById('todo-creator-input-description');

        if (input.value.length < 1) {
            input.className = 'todo-creator-input-null';
            return false;
        } else {
            const value = input.value;
            input.value = '';
            return value;
        }
    }

    return (
        <div className = 'todo-creator-wrapper'>
            <div className = 'todo-creator-input'>
                <input
                    id = 'todo-creator-input-description'
                    type = 'text'
                    placeholder = 'Description'
                    onInput = {(e) => e.target.className = ''}
                />
            </div>
            <div className = 'todo-creator-button'>
                <button
                    onClick = {() => {
                        let value = checkInputValue();
                        if (value !== false) props.todoCreate(value);
                    }}
                >
                    <span>Create</span>
                </button>
            </div>
        </div>
    )
}

export default TodoCreator;