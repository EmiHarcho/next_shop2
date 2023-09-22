import { Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import cards from './cards/slice'
import basket from './basket/slice'
import filter from "./filter/filter"

const combinedReducer = combineReducers({
  cards,
  basket,
  filter,
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const mainReducer = (state : any, action : any) => {
  // это вызывается, когда происходит запрос на стороне сервера
  if (action.type === HYDRATE) {
    const nextState = {
      ...state
    }
    return nextState
  } 
  // всякий раз, когда мы имеем дело со статическим рендерингом или рендерингом на стороне клиента, 
  // это будет тот случай, когда редукторы - это комбинированные Редюсеры.
  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

const makeConfiguredStore = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const makeStore = () => {
    if (typeof window === "undefined") {
      return makeConfiguredStore
    }
    // нам это нужно только на стороне клиента
    let store: any = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== "production",
    })
    store.__persistor = persistStore(store)
    return store
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const wrapper = createWrapper<AppStore>(makeStore)
export const persistor = persistStore(makeStore())


