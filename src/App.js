/*
 * Sarah Klick
 * Webd325
 * 9/16/2020
 * Lab 1
 *
 *
 * To run the project type `npm start` in the terminal
 */

import React from 'react';

import './App.css';

let id = 0;

const Todo = (props) => (
  <div className="bottom-border-todo">
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={props.todo.checked}
        onChange={props.onToggle}
      />
      <button className="button-delete" onClick={props.onDelete}>
        Delete
      </button>
      <span>{props.todo.text}</span>
    </li>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo() {
    const text = prompt('Enter your item!');
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            id: todo.id,
            text: todo.text,
            checked: !todo.checked,
          };
        }
      }),
    });
  }

  render() {
    return (
      <div className="main">
        <div>
          <h1>TODO App</h1>
        </div>

        <div>
          <div>Total Items: {this.state.todos.length}</div>
          <div>Remaining Items: {this.state.todos.filter((todo) => !todo.checked).length}</div>
          <div className="bottom-border"></div>
        </div>

        <button onClick={() => this.addTodo()} className="button">
          New TODO
        </button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
