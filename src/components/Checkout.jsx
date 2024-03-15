import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function hideChecout() {
    userCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }

  return (
    <Modal open={userCtx.progress === "checkout"} onClose={hideChecout}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input type="text" label="Full Name" id="full-name" />
        <Input type="email" label="E-mail Address" id="email" />
        <Input type="text" label="Street" id="street" />
        <div className="control-row">
          <Input type="text" label="Postal" id="postal" />
          <Input type="text" label="City" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={hideChecout}>
            close
          </Button>
          <Button>Submit order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
