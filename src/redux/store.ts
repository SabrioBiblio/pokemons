import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import movesReducer from './slices/movesSlice'
import pokemonsSearchReducer from './slices/pokemonsSearchSlice'
import pokemonsReducer from './slices/pokemonsSlice'
import  userSettingsSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    moves: movesReducer,
    pokemonsSearch: pokemonsSearchReducer,
    userSettings: userSettingsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch