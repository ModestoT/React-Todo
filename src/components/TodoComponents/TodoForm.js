import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.addNewTodo}>
            <input 
                value={props.task}
                type="text" 
                name="task" 
                placeholder="...todo"
                onChange={props.handleInput}
            />
            <button >Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;