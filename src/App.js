import React from 'react';
import HeaderBlock from './components/HeaderBlock';

const App = () => {
  return(
  <>
    <HeaderBlock 
    title="Учите слова онлайн"
    descr='Воспользуйтесь карточками для запоминания и пополнения 
    активных словарных запасов'
    />
    
    <HeaderBlock 
      title="Нам нравится это"
      hideBackground
      /* hideBackground = {true} */
      />
    
  </>
)
}

export default App;
