import React, { useState } from "react"
import MealList from "./components/ResultList"

function App() {
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChange(e) {
    setCalories(e.target.value)
  }

  return (
    <div className="App">
      <section className="controls">
        <div className='para'>
      <h2 className="heading animate__animated animate__fadeInUp">GET RECIPES BASED ON CALORIES ENTERED!</h2>
      <br />
      <br />
      <p className="animate__animated animate__fadeInUp animate__delay-1s">
        Now get direct recipes, just on one click, based on the number of calories you want in your meal. <br />
        This is made possible incorporating the spoonacular API, giving <br />
        the entire info on the recipes and the macronutrients in the meal.
      </p>
        </div>
      <div className="form animate__animated animate__fadeInUp animate__delay-2s">
        <input
          type="number"
          placeholder="Enter calories in numbers"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button> 
      </div>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  )
}

export default App