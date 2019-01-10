import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

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
      todoList: todoData,
      task: '',
      completed: '',
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
          return {...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }) 
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({todoList: this.state.todoList.filter(todo => {
        if(todo.completed === false){
          return todo;
        } else {
          return null;
        }
      })
    });
    
  };

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
}
componentWillUnmount() {
  window.removeEventListener(
    "beforeunload",
    this.saveStateToLocalStorage.bind(this)
  );

  // saves if component has a chance to unmount
  this.saveStateToLocalStorage();
}

  render() {
    return (
      <div className='App'>
        <TodoList todoDataList={this.state.todoList} toggleComplete={this.toggleComplete}/>
        <TodoForm 
          addNewTodo={this.addNewTodo} 
          task={this.state.task}
          handleInput = {this.handleInput}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
