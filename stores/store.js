/*
 * @Date: 2023-11-22 11:12:22
 * @Author: Bruce Hsu
 * @Description: 
 */
import { configureStore } from "@reduxjs/toolkit"

import counterSlice from "./counterSlice"
import restaurantSlice from "./restaurantSlice"

export const store = configureStore({
  reducer: {
    basket: counterSlice,
    restaurant: restaurantSlice
  }
})