import React, {useState, useEffect} from 'react';
import classes from './Meals.module.css';
import MealItem from './MealItem';


const Meals = () => {
  const [meals,setMeals] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState();
  /*const mealItems= [{title: 'sushi' , discription: 'Finest fish and veggies' , price: 22.99 },{title: 'Schnitzel' , discription: 'A german specialty!' , price: 16.50 }, {title: 'Barbecue Burger' , discription: 'American, raw, meaty' , price: 12.99}, {title: 'Green Bowl' , discription: 'Healthy...and green...' , price: 18.99}]*/
  useEffect(()=>{
    const getMeals= async()=>{
      const res = await fetch('https://food-ordering-fafb4-default-rtdb.firebaseio.com/meals.json');
      if(!res){
        throw new Error('there is something wrong');
      }
      const data = await res.json();
      const mealsData = [];
      for (const key in data){
        mealsData.push({
          title: key,
          discription: data[key].description,
          price: data[key].price
        })
      }
      setMeals(mealsData);
      setLoaded(false);

    }
    getMeals().catch(error=>{
      setLoaded(false);
      setError(error.message);
    });

  }
  ,[])
  if (loaded){
    return (
      <p style={{color: 'blue', textAlign: 'center'}}> loading </p>
    )
  }
  if (error){
    return(
    <p style={{color: 'red', textAlign: 'center'}}> loading </p>
  )}
  return (
    <div className={classes.meals}>
      {meals.map(meal =>(
        <MealItem key={meal.title} title={meal.title} description={meal.discription} price={meal.price}/>
      ))}
    </div>
  )
}

export default Meals
