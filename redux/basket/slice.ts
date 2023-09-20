import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketCardType, RemoveProps, Ibasket } from "./types";
import { calcTotalCount } from "@/utils/CalcTotalCount";
import { calcTotalPrice } from "@/utils/CalcTotalPrice";
import {getItemsLS} from "@/utils/getItemsLS";
import { HYDRATE } from "next-redux-wrapper";

// const setItemsToLS = (items : BasketCardType[]) => {
//     const json = JSON.stringify(items) 
//     localStorage.setItem('basket', json)    
// }

const initialState : Ibasket = {
    basketItems : [],
    totalCount : 0,
    totalPrice : 0
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
            state.totalCount = calcTotalCount(state.basketItems)
            console.log(state.basketItems);
            
        },
        REMOVE_ONE_ITEM(state, action : PayloadAction<RemoveProps>){
            const findItem = state.basketItems.find(obj => obj.id === action.payload.id && obj.activeSize === action.payload.activeSize)
            findItem?.count && findItem.count > 1 && findItem.count--
            state.totalPrice = calcTotalPrice(state.basketItems)
            state.totalCount = calcTotalCount(state.basketItems)
        },
        REMOVE_ALL(state){
            state.basketItems = []
            state.totalPrice = 0
            state.totalCount = 0
        }
    },
    extraReducers : {
        [HYDRATE]: (state, action) => {
            return {
              ...state,
              ...action.payload,
            };
          },
    }
})
export default basketSlice.reducer
export const {ADD_ITEM, REMOVE_ONE_ITEM, REMOVE_ALL} = basketSlice.actions