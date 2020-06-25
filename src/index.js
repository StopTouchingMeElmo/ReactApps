import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/* const el = React.createElement(
  'h1',
  null,
  'Hello World'
) */

//атрибуты в методологии реакта называются свойствами(properties)
//в отличие от обычного html, атрибуты в jsx пишутся с маленькой буквы camelCase'ом
//класс в jsx пишется через className
//атрибут for тэга <label></label> записывается как htmlFor
//все остальные атрибуты как в обычном html, только с маленькой буквы и camelCase'ом

//jsx в качестве аргумента html принимает обычные строки
//исключение составляет атрибут style, в виде объекта, ключ которого это css свойство записанное camelCase'ом с мал. буквы
//однако, css классы лучше для производительности, чем inline стили


/* const AppHeader = () =>{
  const margin = 40
  const headerStyle = {
    color: 'green',
    marginLeft:`${margin}px`,
    marginBottom:`${margin}px`
  }
  return(
    <h1 style={headerStyle} className="App-header">Hello World! React JS!</h1>
  )
}  */

const AppHeader = () =>{

  return(
    <h1 className="header">Hello World! React JS!</h1>
  )
}

const AppInput = () => {
  const placeholder = 'Search...'
  return(
  <label htmlFor="search">
    <input id='search' placeholder={placeholder} />
  </label>
  )
}

const AppList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  const firstEl = <li>Item 0</li>// т.о можно вставлять только: строки, числа, boolean, реакт элементы, функции(возвращающие реакт элементы)
  // при вставке массива в jsx через {} будут вставлены элементы массива одной строкой
  // нельзя вставлять объекты или массивы объектов

  // если переменная равна true, undefined или null, то код игнорирует это место
  const isAuth = false
  return(
    <ul>
      {isAuth ? firstEl : null}
      {items.map(el=><li>{el}</li>)}
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

//JSX элемент создает небольшой объект h1 по сравнению с огромным объектом*, создаваемым браузером
// JSX элементы - основа концепции Virtual DOM
//const elJsx = <h1>World!</h1>
//console.log(elJsx)
/* {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …} */

/* console.dir(document.createElement('h1'))
>> h1* */