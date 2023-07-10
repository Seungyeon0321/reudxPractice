import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    showNotification: {
      status: "",
      title: "",
      message: "",
    },
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    Notification(state, action) {
      state.showNotification = {
        status: action.status,
        title: action.title,
        message: action.message,
      };
    },
  },
});

//해당 toggle의 값을 바꿀 때 사용한다
export const uiActions = uiSlice.actions;

// 이 부분을 index의 store에 저장해논 configureStore에서 사용하게 된다
export default uiSlice;
