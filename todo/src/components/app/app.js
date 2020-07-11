import React from "react";

import ToDoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const todoData = [
  { id: 1, content: "Learn React", important: false },
  { id: 2, content: "Learn JS", important: true },
  { id: 3, content: "Build React App", important: false },
];

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={5} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={todoData} />
    </div>
  );
};

export default App;
