import React, { Component } from "react";

import "./todo-list-item.css";

export default class ToDoListItem extends Component {
  render() {
    const { content, important = false } = this.props;
    const spanStyle = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <span className="todo-list-item">
        <span style={spanStyle} className="todo-list-item-content">
          {content}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
