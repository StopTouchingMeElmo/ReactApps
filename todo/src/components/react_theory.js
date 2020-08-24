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

// Кроме js и css компонента могут быть другие файлы с unit тестами, иконками и другими ресурсами.
// Поэтому файлы компонента удобно хранить в отдельной папке
// Файл index.js в папке компонента импортируется по умолчаюнию. Обычно в него импортируется и экспортируется компонент.
// Сделано для удобство импорта компонентов. Путь импорта можно указывать только названием папки.
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
//====================================================================================================================

// Компоненты Класссы.
// У компонентов функций есть существенные ограничения.
// У функций нет внутреннего состояния.
// Т.е. нам некуда сохранить свойства компонента, которые могут изменяться в процессе работы программы.

// Мы не можем использовать переменные с изменяющимися значениями (промежуточным состоянием) снаружи функции по одной причине -
// тогда все компоненты будут использовать одно и то же значение. А мы хотим иметь уникальное состояние для одного конкретного компонента.

// Классы же имеют такое внутреннее динамическое состояние.
// функция render() внутри класса не принимает на вход объект props. Потому что props может понадобиться и в других функциях класса.
// В классе свойства (props) хранятся как поле этого класса. Поэтому доступ к свойствм класса через this.props
// И мы можем деструктурировать из поля props нужные значения в первой строке функции render:
// const { content, important = false } = this.props;

// Можем сокртить запись, сделав именной импорт:
// class ToDoListItem extends React.Component // было
// import React, { Component } from "react";  // именной импорт
// class ToDoListItem extends Component       // сокращенная запись

// Если нет причин для использования класса компонента, т.е. не планируется работа с внутренним состоянием компонента,
// то можно использовать компоненты-функции. Если планы поменяются - сделать рефакторинг в компонет-класс - быстро.
//====================================================================================================================

// Обработка событий.( Про this функций внутри компонента-класса [0600])

// Другими словами, у ф-стрелки, при ее передаче в другой контекст, нет своего this, она сохраняет this
// того объекта, в котором была создана. (Личная интерпретация). Подробнее см. файл B_Arrow_func.js

//export default class ToDoListItem extends Component {
// Классический способ передачи функции внутрь самого объекта.
// просто передаем функцию в объект через конструктор
constructor() {
      super();
      this.onContentClick = () => {
        console.log(`Done: ${this.props.content}`);
      };
    }

// Способ proposal Class Fields, еще не вошедший в стандарт.
// Просто пишем функцию в теле класса.
 onContentClick = () => {
      console.log(`Done: ${this.props.content}`);
    };

//render() {...}
//}
//======================================================================================================================

// State - состояние реакт компонента.
// State хранится в специальном поле state, которое является объектом.
// Его можно инициализировать через конструктор:
constructor(){
  this.state = {
    done: false
  }
}

// Можно инициализировать через тело класса (proposal Class Fields):
state = {
  done: false
}

// Важное правило в реакте: после того как мы первый раз проинициализировали state - его больше нельзя изменять напрямую.
// Его можно читать в функции render(), но напрямую устанавливать state больше нельзя.
// Для установки стейта нужно использовать функцию this.setState, в которую мы передаем объект с изменениями, которые
// хотим внести.
// Установка состояния по клику:
constructor() {
  super();
  this.state = {
    done: false,
  };
  this.onContentClick = () => {
    this.setState({ done: true });
  };
}

// Общая схема работы реакта: мы кликаем на элемент --> срабатывает функция onContentClick --> которая выполняет setState
// --> setState говорит реакту, что состояние этого компонента изменилось --> реакт вызывает функцию render(),
// чтобы перерисовать изменившийся элемент --> функция render возвращает новую структуру изменившегося компонента.
// Реакт запускает reconciliation algorithm, находит, что мы добавили/убрали класс в элементе и вносит ТОЛЬКО это изменение.
// После чего перерисовывает изменившийся компонент.
//======================================================================================================================

// Как работает setState
// Когда мы вызываем setState, изменяя значение одного поля текущего stat'a,
// мы не обновляем предыдущие вызовы других полей stat'a.

// setState принимает только ту часть stat'a, которая должна измениться.
// То есть, когда мы передаем новое значение поля important, нам не нужно передавать прежнее значение done.
// Этот новый объект как бы наложится поверх существующего stat'a.

constructor() {
  super();
  this.state = {
    done: false,
    important: false,
  };
  this.onContentClick = () => {
    this.setState({ done: true });
  };
  this.onMarkImportant = () => {
    this.setState({ important: true });
  };
}
//===================================================================================================================

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// В___А___Ж___Н___О___!
// Обновление состояния, которое зависит от предыдущего значения [5_0420]

// Если наше новое состояние никак не зависит от предыдущего, мы можем сразу передавать объект в setState:
constructor() {
  super();
  this.state = {
    done: false,
    important: false,
  };
  this.onContentClick = () => {
    this.setState({ done: true });
  };
}

// Если же наше новое состояние ЗАВИСИТ ОТ текущего состояния stat'a,
// К примеру мы хотим изменить значение с true на false или наоборот, т.е. на противоположное значение,
// Или мы хотим увеличить счетчик на единицу,
// Или сделать любое другое действие, которое основано на текущем значении state'a:

// Нам нужно передавать внутрь setState другую функцию, принимающую объект state, которая будет вызвана только тогда,
// когда наш текущий state будет готов.*
// В противном случае возможны ошибки из-за того, что метод setState асинхронный, а значит, если не дождаться готовности state'а -
// нам может попасться неактуальное значение текущего state'a с последующими трудноуловимыми ошибками.

// setState принимает функцию
// аргумент - текущий объект state

this.setState((state) => {// *
  return {
    count: state.count + 1,
  };
});

constructor() {
  super();
  this.state = {
    done: false,
    important: false,
  };
  this.onContentClick = () => {
    this.setState((state) => {// *
      return {
        done: !state.done,
      };
    });
  };
  this.onMarkImportant = () => {
    this.setState(({ important }) => {// деструктуризация объекта state
      return {
        important: !important,
      };
    });
  };
}
//==================================================================================================================

// Собственные события (ex. Delete)
// Любой компонент может генерировать собственные события (onDone, onAdded, onDeleted...)
// Достаточно передать callback функцию как property, а затем вызвать ее из компонента, когда наступило событие.
// Через события данные поднимаются вверх по иерархии компонентов.

// Мы передаем выше, по иерархии компонентов, информацию о том, что что-то произошло.
// Когда мы кликаем на кнопку в <ToDoListItem/>, мы вызываем функцию, которую нам передал <ToDoList>
// <ToDoList/>, в свою очередь, вызывает функцию, которую ему передал <App>
// Т.о. <App/> узнает о том, что один из <ToDoListItem>'ов решил удалиться

// И, когда состояние <App> (т.е массив наших объектов-дел) изменится - один из item'ов (дел) будет удален.

<ToDoListItem/>
const { content, onDeleted } = this.props;
<button
  type="button"
  className="btn btn-outline-danger btn-sm float-right"
  onClick={onDeleted}
  >
    <i className="fa fa-trash-o" />
</button>

<ToDoList/>
const ToDoList = ({ todos, onDeleted }) => {
  const elements = todos.map((el) => {
    const { id, ...restProps } = el;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...restProps}
          onDeleted={() => {
            onDeleted(id);
          }}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

<App/>
 
 <ToDoList
 todos={todoData}
 onDeleted={(id) => {
   console.log("Deleted item", id);
 }}
/>

// Иерархия наших компонентов:
// <App>                             <---- todoData (наш массив объектов-дел)
//     <AppHeader/>
//     <SearchPanel/>
//     <ItemStatusFilter/>
//     <ToDoList/>
//               <ToDoListItem/>     <---- Button
//               <ToDoListItem/>     <---- Button
//====================================================================================================================

// setState() - удаление элемента. + смотри предыдущий раздел.
// setState() НЕ ДОЛЖЕН ИЗМЕНЯТЬ ТЕКУЩИЙ STATE
// Методы, которые изменяют (mutate) текущий массив, использовать НЕЛЬЗЯ.
// Например, нельзя использовать метод splice, т.к. он вносит изменения в исходный массив.
// Лучше использовать метод slice, т.к. он оставляет исходный массив неизменным.
const newArr = [           // создаем новый массив, состаящий из двух массив, исключающих удаляемый элемент
  ...oldArr.slice(0, idx), // спредим массив из элементов до удаляемого индекса
  ...oldArr.slice(idx + 1),// спредим массив из элементов после удаляемого индекса
];

return {
  oldArr: newArr,
};
//===================================================================================================================

// setState() - добавление элемента.
//===================================================================================================================