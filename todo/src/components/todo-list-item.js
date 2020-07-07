import React from "react";

const ToDoListItem = ({ content, important = false }) => {
  const spanStyle = {
    color: important ? "tomato" : "black",
  };

  return <span style={spanStyle}>{content}</span>;
};

export default ToDoListItem;
