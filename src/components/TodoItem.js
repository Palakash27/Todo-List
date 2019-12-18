import React, { Component } from "react";

export class TodoItem extends Component {
  completedStyle = completed => {
    return {
      backgroundColor: "rgb(183, 180, 180)",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.completedStyle(completed)}>
        <span>
          <input
            type="checkbox"
            defaultChecked={completed}
            // onChange={e => this.props.checkboxChanged(e, id)}
            onChange={this.props.checkboxChanged.bind(this, id)}
          />
        </span>
        <span>{title}</span>
        <span>
          <button
            style={buttonStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            x
          </button>
        </span>
      </div>
    );
  }
}
const buttonStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
export default TodoItem;
