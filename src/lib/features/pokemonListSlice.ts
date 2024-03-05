import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type pokemon = {
  name: string
  url: string
}

type PokemonArray = pokemon[]

interface IPokemonList {
  list: PokemonArray
  sharedList: PokemonArray
  loading: boolean
  error: any
  nextPage: string | null
}

const initialState: IPokemonList = {
  list: [],
  sharedList: [],
  loading: false,
  error: null,
  nextPage: null
}

export const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemonList = createAsyncThunk(
  'fetchPokemonList',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}`)
      const { results, next } = response.data
      const parsedResponse: PokemonArray = results
      return { data: parsedResponse, next }
    } catch (err) {
      if (err instanceof Error) return rejectWithValue({ error: err.message })
    }
  }
)

export const fetchPokemonListByType = createAsyncThunk(
  'fetchPokemonListByType',
  async (type: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
      const parsedResponse: PokemonArray = response.data.pokemon
      return parsedResponse
    } catch (err) {
      if (err instanceof Error) return rejectWithValue({ error: err.message })
    }
  }
)

const pokemonListSlice = createSlice({
  name: 'pokemon_list',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.list = [...state.list, ...action.payload.data] ?? []
          state.sharedList = [
            ...state.sharedList,
            ...action.payload.data.map((pokemon: any) => ({
              name: pokemon.name,
              url: pokemon.url
            }))
          ]
          state.nextPage = action?.payload?.next ?? null
        }
      })
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(fetchPokemonListByType.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload ?? []
        state.sharedList = state.list.map((pokemon: any) => ({
          name: pokemon.pokemon.name,
          url: pokemon.pokemon.url
        }))
      })
      .addCase(fetchPokemonListByType.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonListByType.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const selectPokemonList = (state: { pokemonList: IPokemonList }) =>
  state.pokemonList.sharedList

export const selectNextPage = (state: { pokemonList: IPokemonList }) =>
  state.pokemonList.nextPage

export const { reset } = pokemonListSlice.actions

export default pokemonListSlice.reducer
