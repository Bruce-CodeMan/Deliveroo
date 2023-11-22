/*
 * @Date: 2023-11-22 11:12:22
 * @Author: Bruce Hsu
 * @Description: 
 */
import { configureStore } from "@reduxjs/toolkit"

import counterSlice from "./counterSlice"

export const store = configureStore({
  reducer: {
    basket: counterSlice
  }
})