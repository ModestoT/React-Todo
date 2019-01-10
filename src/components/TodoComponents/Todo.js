import React from 'react';
import './Todo.css';

function Todo(props) {
     console.log(props.todo.completed);
    return (
        <div >
            {props.todo.task}
            <button onClick={props.toggleComplete}>
                {props.todo.completed ? 'ON' : 'OFF'}
            </button>
        </div>
        // onClick={props.todo.toggleComplete}
    );
}

export default Todo;