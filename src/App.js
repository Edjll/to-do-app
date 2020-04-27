import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem/TodoItem';
import TodoCreator from './TodoCreator/TodoCreator';

class App extends Component {
  constructor() {
    super();

    const todoItems = [];

    for (let i = 0; i < localStorage.length; i++) {
      const todo = JSON.parse(localStorage.getItem(localStorage.key(i)));

      todoItems.push({
        id : Number.parseInt(localStorage.key(i)),
        description : todo.description,
        completed : todo.completed
      });
    }

    this.state = {
      todoItems : todoItems.sort((a, b) => a.id - b.id)
    }
  }

  stateChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    const {todoItems} = this.state;
    todoItems[index].completed = !todoItems[index].completed;

    localStorage.setItem(todoItems[index].id, 
      JSON.stringify({
        description : todoItems[index].description,
        completed : todoItems[index].completed,
      })
    );

    this.setState({
      todoItems : todoItems
    });
  }

  todoCreate = description => {
    const {todoItems} = this.state;
    
    todoItems.unshift({
      id : todoItems.length ? Number.parseInt(todoItems[0].id) - 1 : 0,
      description : description,
      completed : false
    });

    localStorage.setItem(todoItems[0].id, 
      JSON.stringify({
        description : todoItems[0].description,
        completed : todoItems[0].completed,
      })
    );
    
    this.setState({
      todoItems : todoItems
    });
  }

  render() {
    let {todoItems} = this.state;
    const activeTodos = todoItems.filter(todo => todo.completed === false);
    const completedTodos = todoItems.filter(todo => todo.completed === true);
    
    todoItems = [...activeTodos, ...completedTodos].map(todo => {
      return (
        <TodoItem
          key = {todo.id}
          description = {todo.description}
          completed = {todo.completed}
          stateChange = {() => this.stateChange(todo.id)}
        />
      );
    });

    return (
      <div className="App">
        <TodoCreator
          todoCreate = {this.todoCreate}
        />
        {todoItems}
      </div>
    )
  }
}

export default App;
