import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type pokemon = {
  name: string
  url: string
}

type pokemonArray = pokemon[]

interface IPokemonList {
  list: pokemonArray
  sharedList: pokemonArray
  loading: boolean
  error: any
}

const initialState: IPokemonList = {
  list: [],
  sharedList: [],
  loading: false,
  error: null
}

export const fetchPokemonList = createAsyncThunk(
  'fetchPokemonList',
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      const parsedResponse: pokemonArray = response.data.results
      return parsedResponse
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
      const parsedResponse: pokemonArray = response.data.pokemon
      return parsedResponse
    } catch (err) {
      if (err instanceof Error) return rejectWithValue({ error: err.message })
    }
  }
)

const pokemonListSlice = createSlice({
  name: 'pokemon_list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload ?? []
        state.sharedList = state.list.map((pokemon: any) => ({
          name: pokemon.name,
          url: pokemon.url
        }))
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

export default pokemonListSlice.reducer
