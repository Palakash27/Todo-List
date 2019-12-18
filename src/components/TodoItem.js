import React, { Component } from "react";

export class TodoItem extends Component {
  completedStyle = () => {
    if (this.props.todo.completed) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "" };
    }
  };
  render() {
    return (
      <div style={{ backgroundColor: "gray" }}>
        <span>
          <input
            type="checkbox"
            defaultChecked={this.props.todo.completed}
            onChange={e => this.props.checkboxChanged(e, this.props.todo.id)}
          />
        </span>
        <span id={this.props.todo.id} style={this.completedStyle()}>
          {this.props.todo.title}
        </span>
        <span>
          <button
            style={{ backgroundColor: "red", color: "black" }}
            onClick={() => {
              console.log("delete button clicked of ID -", this.props.todo.id);
            }}
          >
            x
          </button>
        </span>
      </div>
    );
  }
}
export default TodoItem;
