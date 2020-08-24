import React, { Component } from "react";

import ToDoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

/* const App = () => {
  const todoData = [
    { id: 1, content: "Learn React", important: false },
    { id: 2, content: "Learn JS", important: true },
    { id: 3, content: "Build React App", important: false },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={5} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList
        todos={todoData}
        onDeleted={(id) => {
          console.log("Deleted item", id);
        }}
      />
    </div>
  );
};

export default App; */

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { id: 1, content: "Learn React", important: false },
        { id: 2, content: "Learn JS", important: true },
        { id: 3, content: "Build React App", important: false },
      ],
    };
    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        /* const part1 = todoData.slice(0, idx);
        const part2 = todoData.slice(idx + 1);
        const newToDoData = part1.concat(part2); */
        const newToDoData = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1),
        ];

        return {
          todoData: newToDoData,
        };
      });
    };
  }

  render() {
    let { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={5} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
