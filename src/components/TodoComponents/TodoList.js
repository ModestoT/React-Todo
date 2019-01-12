import React from 'react';
import Todo from './Todo.js';
import './Todo.css';

function TodoList(props) {
    return (
        <div className = "todo-List">
            {props.todoDataList.map((todo) => {
                return <Todo todo={todo} key={todo.id} toggleComplete={props.toggleComplete}/>
            })}
        </div>
    );
}

export default TodoList;