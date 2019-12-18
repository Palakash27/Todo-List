import React, { Component } from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <List>
        <TodoItem
          key={todo.id}
          todo={todo}
          checkboxChanged={this.props.checkboxChanged}
          delTodo={this.props.delTodo}
        />
      </List>
    ));
  }
}
export default Todos;
