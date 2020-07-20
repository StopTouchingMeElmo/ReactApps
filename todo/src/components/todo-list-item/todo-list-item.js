import React, { Component } from "react";

import "./todo-list-item.css";

export default class ToDoListItem extends Component {
  // Классический способ передачи функции внутрь самого объекта.
  /* constructor() {
    super();
    this.onContentClick = () => {
      console.log(`Done: ${this.props.content}`);
    };
  } */

  // Способ proposal Class Fields, еще не вошедший в стандарт.
  onContentClick = () => {
    console.log(`Done: ${this.props.content}`);
  };

  render() {
    const { content, important = false } = this.props;
    const spanStyle = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <span className="todo-list-item">
        <span
          style={spanStyle}
          className="todo-list-item-content"
          onClick={this.onContentClick}
        >
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
