import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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
      <ListItem style={this.completedStyle(completed)}>
        <ListItemIcon>
          <Checkbox
            color="primary"
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.checkboxChanged.bind(this, id)}
          />
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            size="small"
            color="secondary"
            aria-label="add"
            style={buttonStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
const buttonStyle = {
  float: "center"
};
export default TodoItem;
