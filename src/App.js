import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import Header from "./components/layout/Header";
import "./App.css";
import Todos from "./components/Todos";
import Container from "@material-ui/core/Container";

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

  checkboxChanged = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    return (
      <Container>
        <Header />
        <TodoForm todo={this.state.todos} addTodo={this.addTodo} />
        <div className="TodoList">
          <Todos
            style={{ textAlign: "right" }}
            todos={this.state.todos}
            checkboxChanged={this.checkboxChanged}
            delTodo={this.delTodo}
          />
        </div>
      </Container>
    );
  }
}

export default App;
