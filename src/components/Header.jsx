import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const totalCartQuality = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function showCart() {
    progressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A yummy resturant" />
        <h1>YummyFood</h1>
      </div>
      <nav>
        <Button onClick={showCart} textOnly>
          Cart ({totalCartQuality})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
