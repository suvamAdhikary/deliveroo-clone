import { configureStore } from "@reduxjs/toolkit";
import basketRenderer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketRenderer,
    restaurant: restaurantReducer,
  },
});
