import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useState } from "react";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const intialItemState = { numberOfItems: 1 };

const itemSlice = createSlice({
  name: "counter",
  initialState: intialItemState,
  reducers: {
    increment(state, action) {
      state.numberOfItems++;
      console.log(action);
    },
    decrement(state) {
      if (state.numberOfItems > 0) {
        state.numberOfItems--;
      }
    },

    //이거 여기서 조절하는 법이 있고, 여기 state를 받아서 componenet에서 조절하는 방법이 있을듯, 고려해봐야함
    //  totalPrice(state, action) {
    //    state.numberOfItems * action.payload
    //  }
  },
});

//이 액션을 통해서 해당 createClice의 function을 사용할 수 있다
export const controlItemAction = itemSlice.actions;

/////////////////////////////////////////////////////////////////////////////////

//여기에 id가 들어가야할 듯

//////////////////////////////////
// const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
// const existingCartItem = state.items[existingCartItemIndex];

// let updatedItems;

// //item이 있을 경우 동작한다
// if(existingCartItem) {
//     const updatedItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + action.item.amount
//     }
//     updatedItems = [...state.items];
//     updatedItems[existingCartItemIndex] = updatedItem
// } else {

//     updatedItems = state.items.concat(action.item)
// }

// return{
//     items: updatedItems,
//     totalAmount: updatedTotalAmount,
// }
/////

const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
    controlItemNumber: itemSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
