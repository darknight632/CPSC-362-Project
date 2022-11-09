import React, { useState, useEffect } from 'react'

function Meal({meal}) {
  const [imageUrl, setImageUrl] = useState("");
  const KEY = process.env.REACT_APP_FOOD_API_KEY

  useEffect(() => {
    console.log(process.env.REACT_APP_FOOD_API_KEY)
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cf85d1d5a0f24688aea17c0929f4028c&includeNutrition=false`
    )
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.image)
      })
      .catch(() => {
        console.log("error")
      })
  }, [meal.id])


  return (
    <article className='article-food'>
        <h1 className='h1-nutrition'>{meal.title}</h1>
        <img className='img-nutrition' src={imageUrl} />
        <ul className='instructions'>
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a className='a-food' href={meal.sourceUrl}>Go To Recipe</a>
    </article>
  )
}

export default Meal