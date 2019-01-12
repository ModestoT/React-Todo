import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div onClick={() => props.toggleComplete(props.todo.id)} className={`todo ${props.todo.completed ? 'completed' : null}`}>
            {props.todo.task}
        </div>
        
    );
}

export default Todo;