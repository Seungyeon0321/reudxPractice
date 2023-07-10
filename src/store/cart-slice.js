import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    //이 로직은 firebase에 보낼 수 없음, firsebase같이 backend 서버의 work
    //가 많을 때는 아래와 같은 로직을 front-end에서 처리하는게 이상적이며, 적을 때는 backend에서 처리하는게
    //이상적이다
    addItemToCart(state, action) {
      const newItem = action.payload;
      //이 부분이 가장 어려웠던 부분
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity--;

      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice = exisitingItem.totalPrice - newItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
