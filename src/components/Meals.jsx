import React, { useEffect, useState } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};

export default Meals;
