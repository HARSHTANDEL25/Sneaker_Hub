import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  show: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuan: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action) => {
      state.show = true;
    },
    hideCart: (state, action) => {
      state.show = false;
    },
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item Quantity Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const removedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removedItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed from cart`);
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item Quantity Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item Quantity Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    totalCart: (state, action) => {
      let { totalAmount, totalQuan } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQuan += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuan: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuan = totalQuan;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
