import React from 'react';
import classes from "./mealItem.module.css";
import { useContext,useRef } from 'react';
import Ctx from '../store/Context';

const MealItem = ({title, description, price}) => {
      const context = useContext(Ctx);
      const amount= useRef();
      const addItemHandeler= (e)=>{
        const item ={title : title , description: description, price: price, amount: +amount.current.value};
        context.addItem(item);
      }
  return (
    <div className={classes.meal}>
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{price}$</p>
      </div>
      <div className={classes.quantity}>
        <div className={classes['form-input']}>
            <label>Amount</label>
            <input ref={amount} type='number' min='1' max='5' step='1' defaultValue={1}/>
        </div>
        <button onClick={addItemHandeler}>+add</button>
      </div>
    </div>
  )
}

export default MealItem;
