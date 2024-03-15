import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { useHttp } from "../hooks/useHttp";
import Error from "./Error.jsx";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) return <p className="center">Fetching Data...</p>;

  if (error) return <Error title="Failed to fetch" message={error}></Error>;
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
