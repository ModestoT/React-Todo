// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

function TodoList(porps) {
    return (
        <div>
            {porps.todoDataList.map((todo, index) => {
                return <Todo todo={todo} key={index}/>
            })}
        </div>
    );
}

export default TodoList;