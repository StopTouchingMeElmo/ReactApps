import React, { Component } from "react";

import "./todo-list-item.css";

export default class ToDoListItem extends Component {
  // Способ proposal Class Fields, еще не вошедший в стандарт.
  /* onContentClick = () => {
    console.log(`Done: ${this.props.content}`);
  }; */

  // Классический способ передачи функции внутрь самого объекта.
  constructor() {
    super();
    this.state = {
      done: false,
    };
    this.onContentClick = () => {
      this.setState({ done: true });
    };
  }

  render() {
    const { content, important = false } = this.props;
    const { done } = this.state;
    const spanStyle = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };
    let classNames = "todo-list-item";
    if (done) classNames += " done";

    return (
      <span className={classNames}>
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
