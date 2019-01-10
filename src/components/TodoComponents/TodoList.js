// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

function TodoList(props) {
    return (
        <div>
            {props.todoDataList.map((todo) => {
                return <Todo todo={todo} key={todo.id} toggleComplete={props.toggleComplete}/>
            })}
        </div>
    );
}

export default TodoList;