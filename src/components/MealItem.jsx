import React, { useContext } from "react";
import { currencyFormatter } from "../utils/formatter";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const { name, price, image, description } = meal;
  const cartCtx = useContext(CartContext);

  function clickHandler() {
    cartCtx.addItem(meal);
  }
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
          <Button onClick={clickHandler}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
