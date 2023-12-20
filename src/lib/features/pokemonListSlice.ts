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
  id: string
  loading: boolean
  error: any
}

const initialState: IPokemonList = {
  list: [],
  id: '',
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
  reducers: {
    setPokemonId: (state, action) => {
      state.id = extractValueFromUrl(action.payload.url)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload ?? []
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
