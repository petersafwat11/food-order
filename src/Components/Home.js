import React from 'react'
import Header from './Header';
import Main from './Main';
import Meals from './Meals';
import classes from './Home.module.css'

const Home = ({showCart}) => {
  return (
        <div className={classes.main}>
          <Header showCart={showCart}/>   
           <Main/>     
           <Meals/> 
        </div>
    )
}

export default Home
