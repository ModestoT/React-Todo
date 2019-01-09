import React from 'react';

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
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;