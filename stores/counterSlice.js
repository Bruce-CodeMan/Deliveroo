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
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      if(index >= 0) {
        state.items.splice(index, 1)
      }else{
        console.warn(`Cannot remove product`)
      }
    }
  }
})

export const { addToBasket, removeFromBasket } = counterSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => 
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
total += item.price, 0)

export default counterSlice.reducer