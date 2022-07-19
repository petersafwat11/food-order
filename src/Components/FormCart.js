import React, {useRef, useState, useContext} from 'react';
import classes from './FormCart.module.css';
import Ctx from '../store/Context';


const FormCart = ({hideCart, setSuccess}) => {
    const context= useContext(Ctx);
    const [userData, setUserData] = useState({
        name: '',
        street: '',
        postalCode: '',
        city: ''
    })
    const nameInput= useRef();
    const streetInput= useRef();
    const cityInput= useRef();
    const postalCodeInput= useRef();
    const submitHandeler= (e)=>{
        e.preventDefault();
        const nameEntered = nameInput.current.value;
        const streetEntered = streetInput.current.value;
        const cityEntered = cityInput.current.value;
        const postalCodeEntered = postalCodeInput.current.value;    
        const validName= nameEntered.trim()!=="";
        const validStreet = streetEntered.trim() !== "";
        const validCity = cityEntered.trim() !== '';
        const validPostalCode = postalCodeEntered.trim().length === 5;
        setUserData({
            name:nameEntered,
            city: cityEntered,
            postalCode: postalCodeEntered,
            street: streetEntered
        });
        const sendData = async()=>{
            const res = await fetch('https://food-ordering-fafb4-default-rtdb.firebaseio.com/data.json',{
                method:'POST',
                body: JSON.stringify({
                    user: userData,
                    items: context.items
                })
                
            })
        }
        if (validCity&& validName&& validPostalCode&& validStreet){
                sendData();
                setSuccess(true);
                context.clearItems();
        }

    }

  return (
    <form onSubmit={submitHandeler}>
        <div className={classes.control}>
            <label htmlFor='name'>your name</label>
            <input type='text' id='name' ref={nameInput} />
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>your street</label>
            <input type='text' id='street' placeholder='your streed' ref={streetInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal-code'>your postal code</label>
            <input type='num' id='postal-code' placeholder='your postal code' ref={postalCodeInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>your city</label>
            <input type='text' id='city' placeholder='your city' ref={cityInput}/>
        </div>
        <div className={classes.actions}>
            <button className={classes['close-btn'] } onClick={hideCart}>cancel</button>
            <button className={classes['order-btn']}>confirm</button>
        </div>
    </form>    )
}

export default FormCart;
