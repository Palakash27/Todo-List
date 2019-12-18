import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: true
      },
      {
        id: 3,
        title: "Meeting",
        completed: true
      }
    ]
  };

  addTodo = newTodo => {
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos });
  };

  checkboxChanged = (event, todoId) => {
    let todos = this.state.todos;
    todos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos });
    // console.log(todos);
  };

  render() {
    return (
      <div className="App">
        <h1>Todo Manager</h1>
        <TodoForm todo={this.state.todos} addTodo={this.addTodo} />
        <div className="TodoList">
          <Todos
            style={{ textAlign: "right" }}
            todos={this.state.todos}
            checkboxChanged={this.checkboxChanged}
          />
        </div>
      </div>
    );
  }
}

export default App;
