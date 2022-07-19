import React from 'react';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
import meals from '../assets/meals.jpg'

const Header = ({showCart}) => {
  return (
    <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderButton  showCart={showCart}/>

        </header>
        <div className={classes['main-image']}>
            <img  src={meals} alt='meals'/>            
        </div>

    </>

    )
}

export default Header
