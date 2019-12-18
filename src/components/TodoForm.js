import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  genTodo = (id, title, completed = false) => ({
    id,
    title,
    completed
  });
  handleTodoChange = e => {
    this.setState({ title: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    if (this.state.title.length) {
      let newTodo = this.genTodo(
        Math.floor(Math.random() * 100),
        this.state.title
      );
      this.props.addTodo(newTodo);
    }
    document.getElementById("newTodo").value = "";
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <form>
        <input
          id="newTodo"
          type="text"
          placeholder="Enter Todo"
          onChange={this.handleTodoChange}
        />
        <input type="submit" onClick={this.formSubmit} />
      </form>
    );
  }
}

export default TodoForm;
