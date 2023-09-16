import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { CardType, Status, StateType } from './types'

export const fetchCards = createAsyncThunk('cards', async() => {
  const {data} = await axios.get('http://localhost:3000/api/cards')
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
  
      builder.addCase(fetchCards.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
  
      builder.addCase(fetchCards.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
    },
})
export const {SET_CARDS} = cardsSlice.actions
export default cardsSlice.reducer






