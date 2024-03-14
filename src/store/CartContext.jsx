import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem(item) {},
  removeItem(id) {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingItemIndex > -1) {
      const updatedItem = updatedItems[existingItemIndex];
      updatedItems[existingItemIndex] = {
        ...updatedItem,
        quantity: updatedItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    const existingItem = updatedItems[existingItemIndex];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, cartDispatchAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    cartDispatchAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    cartDispatchAction({ type: "REMOVE_ITEM", id });
  }

  const value = { items: cart.items, addItem, removeItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
