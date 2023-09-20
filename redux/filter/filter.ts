import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type sortType = {
    name : string,
    sortProperty : string
}

type FilterSliceState = {
    searchValue : string,
    sort : sortType
}

const initialState : FilterSliceState = {
    searchValue : '',
    sort : {
        name : 'Умолчанию',
        sortProperty : 'default'
    }
}

const filterSlice = createSlice({
    name : 'filter', 
    initialState,
    reducers : {
        SET_SORT(state, action : PayloadAction<sortType>){
            state.sort = action.payload
        },
        SET_SEARCH_VALUE(state, action: PayloadAction<string>){
            state.searchValue = action.payload
            
        }
    }
})
export const {SET_SORT, SET_SEARCH_VALUE} = filterSlice.actions
export default filterSlice.reducer
