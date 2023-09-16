import { configureStore } from "@reduxjs/toolkit"
import cards from './cards/slice'
import basket from './basket/slice'

export const store = configureStore({
    reducer : {
        cards,
        basket,
    },
})
export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
