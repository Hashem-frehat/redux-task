import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actions";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart];
      const existingItem = newCart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newCart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case UPDATE_QUANTITY:
      const updatedItems = state.cart.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return { ...state, cart: updatedItems };

    default:
      return state;
  }
};

export default rootReducer;
