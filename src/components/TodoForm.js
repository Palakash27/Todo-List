import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import uuid from "uuid";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  genTodo = (id, title, completed = false) => ({
    id: uuid.v4(),
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
    this.setState({ title: "" });
  };
  render() {
    return (
      <Container>
        <form onSubmit={this.formSubmit} style={formStyle}>
          <TextField
            id="newTodo"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTodoChange}
            label="Add Todo"
            style={{ flex: 1 }}
          />
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={this.formSubmit}
          >
            <AddIcon />
          </Fab>
        </form>
      </Container>
    );
  }
}
const formStyle = {
  textAlign: "center",
  padding: "5px",
  display: "flex"
};
export default TodoForm;
