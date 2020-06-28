import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Card from './components/Card';
import CardsList from './components/CardsList'

import { ReactComponent as ReactLogoSvg } from './logo.svg';
import ReactLogo from './logo.png';

const wordsList = [
  {
      id: 1,
      eng: 'between',
      rus: 'между'
  },
  {
      id: 2,
      eng: 'high',
      rus: 'высокий'
  },
  {
      id: 3,
      eng: 'really',
      rus: 'действительно'
  },
  {
      id: 4,
      eng: 'something',
      rus: 'что-нибудь'
  },
  {
      id: 5,
      eng: 'most',
      rus: 'большинство'
  },
  {
      id: 6,
      eng: 'another',
      rus: 'другой'
  },
  {
      id: 7,
      eng: 'much',
      rus: 'много'
  },
  {
      id: 8,
      eng: 'family',
      rus: 'семья'
  },
  {
      id: 9,
      eng: 'own',
      rus: 'личный'
  },
  {
      id: 10,
      eng: 'out',
      rus: 'из/вне'
  },
  {
      id: 11,
      eng: 'leave',
      rus: 'покидать'
  },
];

//Добавление ключа в передаваемые компоненту пропс по индексу элемента не имеет смысла,
//так как уникальность этого ключа условна и зависит от способа добавление новых элементов в массив
//в начало или конец списка. Т.о. будут динамически меняться индексы, а с ними - ключи.
const App = () => {
  return (
<React.Fragment>
    <HeaderBlock >
    <img src={ReactLogo} />
    <Header>Учите слова онлайн</Header>
    <Paragraph>Воспользуйтесь карточками для запоминания и пополнения 
    активных словарных запасов</Paragraph>
    </HeaderBlock>
   {/*  <div>
      {
        wordsList.map((el)=> <Card eng={el.eng} rus={el.rus} key={el.id}/>)
      }
    </div> */}
    <CardsList item={wordsList}/>
    
    <HeaderBlock hideBackground
      /* hideBackground = {true} */>
    <Header>Запоминайте новые слова</Header>
    <Paragraph>Ну здорово же!</Paragraph>
    <ReactLogoSvg/>
    </HeaderBlock>
</React.Fragment>
)
}

export default App;
