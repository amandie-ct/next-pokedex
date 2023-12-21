import { configureStore } from '@reduxjs/toolkit'
import pokemonTypesReducer from './features/pokemonTypesSlice'
import pokemonListReducer from './features/pokemonListSlice'
import pokemonDetailsReducer from './features/pokemonDetailsSlice'

const store = configureStore({
  reducer: {
    pokemonTypes: pokemonTypesReducer,
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
