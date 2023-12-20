import { extractValueFromUrl } from '@/app/utils/extractValueFromUrl'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type pokemon = {
  name: string
  url: string
  id: string | undefined
}

type pokemonArray = pokemon[]

interface IPokemonList {
  list: pokemonArray
  loading: boolean
  error: any
}

const initialState: IPokemonList = {
  list: [],
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

const pokemonListSlice = createSlice({
  name: 'pokemon_list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload ?? []
        state.list.map((pokemon) => {
          pokemon.id = extractValueFromUrl(pokemon.url)
        })
      })
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default pokemonListSlice.reducer
