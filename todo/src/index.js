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
//================================================================================================================

// Структура приложения
// Один файл - один компонент. Это типичный паттерн организации кода для Реакт приложений.
// Если в файле есть хоть одна строка JSX кода, то необходимо импортировать Реакт.
// Компоненты помещаем в папку src/components
// Компоненты должны быть независимыми для дальнейшего переиспользования
//================================================================================================================

// Props свойства
// Как и в обычные html элементы, в реакт компоненты можно передавать свойства,
// которые будут определять, как элемент будет выглядеть или что он будет отображать.
// Объект props передается в каждую функцию компонент в качестве первого параметра.
// Внутри этого props будут названия всех переданных свойств.

// Можно использовать синтексис деструктуризции, чтобы достать значение из объекта props, который передается
// в качестве аргумента функции. ({ название нужного свойства объекта })
// Любой тип данных в JS можно передать в качестве свойства другому компоненту.
// Например, передать массив и работать с массив в качестве свойства реакт компонента. const todoData = [] <ToDoList todos={todoData} />
//=================================================================================================================

// Массивы как свойства
// Используя {} в JSX можно вставлять массивы элементов(не только по одному)
// Можно передать все свойства объекта в компонент, используя Object Spread оператор, не перечисляя каждое. {...el}
//===================================================================================================================

// Коллекции и ключи.
// Процесс поиска изменений через react reconciliation algorithm основывается на уникальных ключах каждого элемента,
// чтобы иметь возможность быстрого, а не долгого последовательного, поиска изменившихся элементов для их обновления.
// Нельзя использовать в качестве ключеий индексы элементов, т.к. теряется смысл работы алгоритма. Или мы должны быть
// уверены в том, что индексы меняться не будут и новые элементы будут добавляться ТОЛЬКО в конец списка.

// Поэтому, каждому JSX элементу в массиве нужно уникальное свойство key
//=====================================================================================================================

// Импорт css
// Для сборки проекта мы используем Webpack.
// Импортируем файл css в файл js нашего компонента.
// webpack видит такой импорт и самостоятельно вставляет наш css код в шаблон.
// Типичный паттерн - называть файлы css точно так же как js файл компонента.

// М.б. другие правила. В нашем случае - каждый корневой jsx элемент компонента, который мы возвращаем в компоненте,
// будет содержать className с названием этого компонента.

import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";

import "./index.css";

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

ReactDOM.render(<App />, document.getElementById("root"));
