
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slices/ListSlice";

const store = configureStore({
  reducer:{
    list: listReducer
  }
})

export default store;
export type AppDispatch = typeof store.dispatch;