import React from "react";



import styles from "./AvailableMeals.module.css"
import MealItem from "./MealsItem/MealItem";
import Card from "../UI/Card";


const testMealData = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = testMealData.map(mealItem =>  (
    <MealItem 
      key={mealItem.id} 
      mealDescription={mealItem.description} 
      mealPrice={mealItem.price}
       mealName={mealItem.name}
    />
  )); 

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul> 
      </Card>     
    </section>

    );
}
 
export default AvailableMeals;