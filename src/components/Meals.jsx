import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        let response = await fetch("http://localhost:3000/meals");
        if (!response.OK) {
        }
        let meals = await response.json();

        setMeals(meals);
      } catch (error) {}
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
