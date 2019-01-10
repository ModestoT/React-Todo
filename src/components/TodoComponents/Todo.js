import React from 'react';
import './Todo.css';

function Todo(props) {
     console.log(props.todo.completed);
    return (
        <div onClick={() => props.toggleComplete(props.todo.id)}>
            {props.todo.task}
            {/* <button onClick={props.toggleComplete}>
                {props.todo.completed ? 'ON' : 'OFF'}
            </button> */}
        </div>
        
    );
}

export default Todo;