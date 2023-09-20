import {createAction, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { CardType, Status, StateType } from './types'
import {RootState} from '../store'
import { HYDRATE } from 'next-redux-wrapper'

type paramsType = {
  sortProperty : string
  searchValue : string
}

export const fetchCards = createAsyncThunk('cards', async(params : paramsType) => {
  const {sortProperty, searchValue} = params
  const {data} = await axios.get<CardType[]>(`http://localhost:3000/api/cards?sort=${sortProperty}&search=${searchValue}`)
  
  return data as CardType[]
})

const initialState : StateType = {
  items : [],
  status : Status.LOADING
}

const cardsSlice = createSlice({
    name : 'cards',
    initialState,
    reducers : {
        SET_CARDS(state, action : PayloadAction<CardType[]>){
            state.items = action.payload
        } 
    },
    extraReducers: (builder) => { 

      builder.addCase(fetchCards.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      builder.addCase(fetchCards.fulfilled, (state, action : any) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      builder.addCase(fetchCards.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
      builder.addCase(HYDRATE, (state, action : any) => {
        return {
          ...state,
          ...action.payload,
        }
      })
    },
})
export const {SET_CARDS} = cardsSlice.actions
export default cardsSlice.reducer






