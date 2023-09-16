import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketCardType, RemoveProps, Ibasket } from "./types";
import { calcTotalCount } from "@/utils/CalcTotalCount";
import { calcTotalPrice } from "@/utils/CalcTotalPrice";

const initialState : Ibasket = {
    basketItems: [],
    totalPrice : 0,
}

const basketSlice = createSlice({
    name : 'basket',
    initialState,
    reducers : {
        ADD_ITEM(state, action : PayloadAction<BasketCardType>){
            const findItem = state.basketItems.find(obj => obj.id === action.payload.id && obj.activeSize === action.payload.activeSize)
            findItem 
                ? findItem.count++
                : state.basketItems.push({...action.payload, count : 1})
            state.totalPrice = calcTotalPrice(state.basketItems)
        },
        REMOVE_ITEM(state, action : PayloadAction<RemoveProps>){
            state.basketItems = state.basketItems.filter((obj) => obj.id !== action.payload.id  && obj.activeSize === action.payload.activeSize)
            state.totalPrice = calcTotalPrice(state.basketItems)
        },
        REMOVE_ONE_ITEM(state, action : PayloadAction<RemoveProps>){
            const findItem = state.basketItems.find(obj => obj.id === action.payload.id && obj.activeSize === action.payload.activeSize)
            findItem?.count && findItem.count > 1 && findItem.count--
            state.totalPrice = calcTotalPrice(state.basketItems)
        },
        REMOVE_ALL(state){
            state.basketItems = []
            state.totalPrice = 0
        }
    }
})
export default basketSlice.reducer
export const {ADD_ITEM, REMOVE_ITEM, REMOVE_ONE_ITEM, REMOVE_ALL} = basketSlice.actions