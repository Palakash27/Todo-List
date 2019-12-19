import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import Header from "./components/layout/Header";
import "./App.css";
import Todos from "./components/Todos";
import Container from "@material-ui/core/Container";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=50")
      .then(res => this.setState({ todos: res.data }));
  }

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
      <Router>
        <Container>
          <Header />
          <Route
            exact
            path="/Todo-List/"
            render={props => (
              <>
                <TodoForm todo={this.state.todos} addTodo={this.addTodo} />
                <Todos
                  style={{ textAlign: "right" }}
                  todos={this.state.todos}
                  checkboxChanged={this.checkboxChanged}
                  delTodo={this.delTodo}
                />
              </>
            )}
          />
          <Route path="/Todo-List/about" component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
