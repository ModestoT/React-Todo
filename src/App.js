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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: todoData,
      task: '',
      completed: false,
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
        {task: this.state.task, id: Date.now()}
      ],
      task: ''
    });
  };

  clearCompleted = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className='App'>
        <TodoList todoDataList={this.state.todoList}/>
        <TodoForm 
          addNewTodo={this.addNewTodo} 
          task={this.state.task}
          handleInput = {this.handleInput}
        />
      </div>
    );
  }
}

export default App;
