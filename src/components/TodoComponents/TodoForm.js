import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <form>
            <input 
                value={props.task}
                type="text" 
                name="task" 
                placeholder="...todo"
                onChange={props.handleInput}
            />
            <button onClick={props.addNewTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
            <input 
                value={props.filterText}
                type="text" 
                name="task" 
                placeholder="Search for Todo"
                onChange={props.handleSearch}/>
        </form>
    );
}

export default TodoForm;