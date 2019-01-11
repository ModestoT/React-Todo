import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

// const todoData= [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [],
      filterText: '',
      task: '',
      completed: '',
      id: ''
    };
  }
  //method used to handle the input from the user from the input field used to create a new todo
  //this method takes in what the user types and makes it the new todo's task
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //method used to handle the search input from the user from the search input field
  //this method takes in what the user types and uses it to compare it against the already created todo's 
  //and calls filterList method to filter the todoList to display the searched input 
  handleSearch = e => {
    this.setState({filterText: e.target.value,
    }, () => {
      this.filterList();
    });
  };
  //method used to filter the todoList based on what was typed in the filter input field
  //this method grabs all the div's with the class 'todo' attached to it and places them into an array
  //it then is looped through and applies a new class of hide if the filterText is is the same as the todo's text or removes the hide class if it's not
  filterList = e => {
    const currentList = document.querySelectorAll('.todo');
    const newList = Array.from(currentList);

      newList.forEach(todo => {
        if(todo.textContent.indexOf(this.state.filterText) === -1){
          todo.classList.add('hide');
        } else {
          todo.classList.remove('hide');
        }
      })
  };
  //method used to create a new todo when the create todo button is clicked on
  //this method sets the state of the todoList to a new array that has the original data along with the
  //newly entered data from the input field for creating a todo, it also assigns an id of Date.now() to unsure it is unique 
  //along with setting is completed state to false 
  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList, 
        {task: this.state.task, id: Date.now(), completed: false }
      ],
      task: '' //resets the input text field to be blank
    });
  };
  //method used to toggle the completed state to either be true or false by looping through the todoList
  //and comparing the id of the clicked on task to the id's of the task inside of the todoList array
  toggleComplete = id => {
    this.setState({todoList: this.state.todoList.map(todo => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }) 
    });
  };
  //method used to remove the completed todo's by running .filter() on the todoList array and checking
  //if the todo's completed state is false or not if its false it will show the none completed todo's 
  //other wise it will do nothing
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
          filterText = {this.filterText}
          handleInput = {this.handleInput}
          handleSearch = {this.handleSearch}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
