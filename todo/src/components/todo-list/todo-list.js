import React from "react";
import ToDoListItem from "../todo-list-item";

import './todo-list.css'

const ToDoList = ({ todos }) => {
  const elements = todos.map((el) => {
    const { id, ...restProps } = el;
    return (
      <li key={id} className='list-group-item'>
        <ToDoListItem {...restProps} />
      </li>
    );
  });
  return <ul className='list-group todo-list'>{elements}</ul>;
};

export default ToDoList;
