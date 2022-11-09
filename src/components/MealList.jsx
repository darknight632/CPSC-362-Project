import React from 'react'
import Meal from './Meal'

function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main className='main-nutrition'>
      <section className='meals'>
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />
        })}
      </section>
    </main>
  )
}

export default MealList;