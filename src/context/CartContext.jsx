import { createContext, useReducer } from "react";
import { ReactNode } from "react";

export const CartContext = createContext({
  cart: [],
  dispatch: () => {},
});

const initialState = { cart: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE":
      return { cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
