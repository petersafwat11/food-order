import CartIcon from './CartIcon';
import classes from './HeaderButton.module.css';
import { useContext } from 'react';
import Ctx from '../store/Context';
import { cleanup } from '@testing-library/react';
const HeaderCartButton = ({showCart}) => {
  const context = useContext(Ctx);
  let x=0; 
  if (context.items.length>0 ){const num = context.items.map(item=>(
    x = x+item.amount
  ));}
  return (
    <button className={classes.button} onClick={ showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{x}</span>
    </button>
  );
};

export default HeaderCartButton;
