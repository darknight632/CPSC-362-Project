import React, { useState } from 'react'
import { MealList } from '../components';
import './Nutrition.css'

function Nutrituion() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    
    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=cf85d1d5a0f24688aea17c0929f4028c&timeFrame=day&targetCalories=${calories}`
      )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
    }

    function handleChange(e) {
      setCalories(e.target.value)
    }

    return (
      <div className='nutrition-app'>
        <section className='controls'>
          <input className='input-nutrition'
            type='number'
            placeholder='Calories'
            onChange={handleChange}
          />
          <button className='button-nutrition' onClick={getMealData}>Get Meal Plan</button>
        </section>
        {mealData && <MealList mealData={mealData} />}
      </div>
    )
  }

export default Nutrituion