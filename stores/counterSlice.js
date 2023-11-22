/*
 * @Date: 2023-11-22 13:22:41
 * @Author: Bruce Hsu
 * @Description: 
 */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: []
}

export const counterSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.value += 1
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    }
  }
})

export const { addToBasket, removeFromBasket } = counterSlice.actions

export default counterSlice.reducer