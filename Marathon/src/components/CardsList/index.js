import React from 'react';
import Card from '../Card';
import s from './CardsList.module.css'

const CardsList = ({item=[]}) =>{
    return(
    <div className={s.root}>
      {
        item.map((el)=> <Card eng={el.eng} rus={el.rus} key={el.id}/>)
      }
    </div>
    )
}

export default CardsList