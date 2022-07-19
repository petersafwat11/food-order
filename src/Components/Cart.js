import React from 'react';
import classes from './cart.module.css';
import { useState,useContext,useRef } from 'react';
import Ctx from '../store/Context';
import FormCart from './FormCart';
//import CartItem from './CartItem';

const Cart = ({showCart, hideCart}) => {

  const context = useContext(Ctx);
  const [showForm, setShowForm]= useState(false);

  const addItemHandeler= (item)=>{
    context.addItem(item);
  }
const showFormHandeler = ()=>{
  setShowForm(true)
}
const [success, setSuccess] = useState(false);


const content = 
    <>
                  <ul className={classes.list}>
              {context.items.map(item=>(
              <li key={item.title} className={classes['list__item']}>
                <div className={classes.details}>
                  <h3 className={classes.title}>{item.title}</h3>
                  <p>
                    <span className={classes.price}>{item.price} $</span>
                    <span className={classes.amount}>x {item.amount} </span>
                  </p>
                </div>
                <div>
                  <button className={classes.add} onClick={()=>{
                    item ={title: item.title, amount:1 , price: item.price}
                    addItemHandeler(item)
                  } } >+</button>
                  <button className={classes.reduce} onClick={()=>{
                    context.removeItem({title:item.title, price: item.price, amount: 1})
                  } }>-</button>
                </div>
              </li>
            ))}
            </ul>  
           <div className={classes['total-amount']}>
              <span>Total Amount</span>
              <span>{context.totalAmount}</span>
            </div> 
            {!showForm&&<div className={classes.actions}>
              <button className={classes['close-btn']} onClick={hideCart}>close</button>
              <button className={classes['order-btn']} onClick={showFormHandeler} >order</button>
            </div>} 
            {showForm && <FormCart hideCart={hideCart} setSuccess={setSuccess}/>}
    </>

    const successMessage =
    <>
      <p>your request has been sybmitted... </p>
      <button className={classes['close-btn']} onClick={hideCart}>close and continue</button>
    </>
    ;
  return (
    <> 
       <div className={classes.overlay} onClick={hideCart}>
       </div>
       <div className={classes.model} >
          <div className={classes.content}>
            {!success&& content}
            {success&& successMessage}
          </div>
        </div>

    </>
  
    
  )
}

export default Cart
