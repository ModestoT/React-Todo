import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      task: '',
      completed: '',
      status: '',
      id: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList, 
        {task: this.state.task, id: Date.now(), completed: false }
      ],
      task: ''
    });
  };

  toggleComplete = (id) => {
    this.setState({todoList: this.state.todoList.map(todo => {
        if(todo.id === id) {
          return {...todo, completed: todo.completed === false ? true : false};
        } else {
          return todo;
        }
      }) 
    })
  };

  clearCompleted = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='App'>
        <TodoList todoDataList={this.state.todoList} toggleComplete={this.toggleComplete}/>
        <TodoForm 
          addNewTodo={this.addNewTodo} 
          task={this.state.task}
          handleInput = {this.handleInput}
        />
         <button onClick={this.toggleComplete}>
            {this.state.completed ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default App;
