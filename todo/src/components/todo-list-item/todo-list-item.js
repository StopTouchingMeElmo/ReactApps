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
      important: false,
    };
    this.onContentClick = () => {
      this.setState((state) => {
        return {
          done: !state.done,
        };
      });
    };
    this.onMarkImportant = () => {
      this.setState(({ important }) => {
        return {
          important: !important,
        };
      });
    };
  }

  render() {
    const { content } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) classNames += " done";
    if (important) classNames += " important";

    return (
      <span className={classNames}>
        <span className="todo-list-item-content" onClick={this.onContentClick}>
          {content}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
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
