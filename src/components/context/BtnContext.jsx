import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

export const BtnContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist_cart = state.cart.some(
        (product) => product.id === action.payload.id,
      );
      if (!exist_cart) {
        toast.success(`${action.payload.title} added to cart`);
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      } else {
        toast.error(`${action.payload.title} already exist`);
        return state;
      }

    case "ADD_TO_WISHLIST":
      const exist = state.wishlist.some(
        (product) => product.id === action.payload.id,
      );

      if (!exist) {
        toast.success(`${action.payload.title} added to wishlist`);
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      } else {
        toast.error(`${action.payload.title} already exist`);
        return state;
      }
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 1,
              }
            : product,
        ),
      };
    case "REMOVE_FROM_CART":
      toast.error("Product removed from cart");

      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
}

export function BtnProvider({ children }) {
  const initialState = {
    cart: (() => {
      try {
        return JSON.parse(localStorage.getItem("cart")) || [];
      } catch {
        return [];
      }
    })(),

    wishlist: (() => {
      try {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
      } catch {
        return [];
      }
    })(),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.cart, state.wishlist]);
  return (
    <BtnContext.Provider value={{ state, dispatch }}>
      {children}
    </BtnContext.Provider>
  );
}
