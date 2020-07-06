// Virtual DOM - техника, которая использует легковесные реакт объекты,
// которые описывают элементы на странице. По сравнению с обычным DOM деревом, которое создает огромные объекты внутри браузера.
// const el = <h1>picaboo</h1> >> {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
// console.dir(document.createElement('h1')) >> h1 объект с огромным кол-вом свойств и вложенных свойств

//ReactDOM.render метод, который превращает реакт элементы в обычные DOM элементы и рендерит их на странице.

// Babel преобразует строку JSX кода const el = <h1>picaboo</h1>
// в строку обычного JS const el = React.createElement('h1', null, 'picaboo')

// react Компонент - это функция, которая возвращает реакт элемент.
// Компонент можно использовать как обычный кастомный html tag
// Компоненты называются с Большой буквы, т.о. реакт отличает наши компоненты от обычныйх html тэгов.

// Если JSX код занимает несколько строк, то его нужно взять в ()
// Блок JSX кода возвращает и создает реакт элемент. JSX код превращается в вызов функции React.createElement,
// поэтому корнем JSX фрагмента должен быть ОДИН элемент, то есть
// необходма обертка в виде родительского элемента, например несколько <span></span> обернуть в один <div></div>
// JSX умеет в разметке использовать js выражения и их значения, результаты вызова функций. {}
// С помощью {} мы можем вставлять одни реакт элементы(именно элементы) в другие. Также можно вставлять строки, числа,
// булевые значения. НО НЕ ОБЪЕКТЫ. При этом, если значение элемента null или undefined, то это не будет ошибкой.
// true и false также будут проигнорированы и никаких объектов внутри фигурных скобок {true} отображаться не будет.

// T.o. мы можем прямо в JSX писать фрагменты логики, которые позволяют отображать или скрывать компоненты,
// в зависимости от значения переменных. Но с логикой внутри JSX нужно знать меру и не переносить большие куски js кода в JSX.

// {} внутри JSX, помимо передачи child элементов (например текстовые ноды), можно использовать для передачи атрибутов тэгов.
// Атрибуты в react называются свойствами props.
// При этом для передачи в {props} нет ограничений, в отличие от передачи в child элементы, куда нельзя передавать объекты.
// В кастомные тэги в качестве props мы можем передавать что угодно. <ToDoList items={["item1", "item2"]} />

// В JSX для html тэгов название атрибутов нужно писать camelCase'ом с маленькой буквы. Названия те же.
// Два исключения className (вместо class в обычном html) и htmlFor (вместо for).
// for обычно ставится на <label /> чтобы указать к какому html элементу этот label относится.

// Для передачи стиля inline можно передать элементу объект, содержащий стили.
// const inputStyle = { fontSize: '20px'}; <input style={inputStyle}/>
// Если в свойстве не передать значение по по умолчанию оно true
// Т.е. <input disabled={true}/> эквивалентен <input disabled />

// В JSX html по умолчанию, в целях безопасности, игнорируется, т.е. передается обычной строкой, а не кодом.

import React from "react";
import ReactDOM from "react-dom";

const ToDoList = () => {
  const arr = ["Task-0", "Task-1", "Task-2"];
  return (
    <ul>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My ToDo List</h1>;
};

const SearchPanel = () => {
  const placeholderText = "Search smthn";
  const inputStyle = { fontSize: "20px" };
  return <input placeholder={placeholderText} style={inputStyle} />;
};

const App = () => {
  const isLogged = true;
  const loginplease = <span>Log in please</span>;
  const welcomeBack = <span>welcome Back</span>;
  return (
    <>
      <span>{new Date().toString()}</span>
      {isLogged ? welcomeBack : loginplease}
      <AppHeader />
      <SearchPanel />
      <ToDoList items={["item1", "item2"]} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
