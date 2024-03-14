import React from "react";
import { currencyFormatter } from "../utils/formatter";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  const { name, price, image, description } = meal;
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
