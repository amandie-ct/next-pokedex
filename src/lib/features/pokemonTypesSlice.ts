import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeProperties = {
  name: string
  url: string
}

type TypePropertiesArray = TypeProperties[]

interface IPokemonTypes {
  types: TypePropertiesArray
  selectedTypeUrl: string
  loading: boolean
  error: any
}

const initialState: IPokemonTypes = {
  types: [],
  selectedTypeUrl: '',
  loading: false,
  error: null
}

export const fetchPokemonTypes = createAsyncThunk(
  'fetchPokemonTypes',
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/type/')
      const parsedResponse: TypePropertiesArray = response.data.results
      return parsedResponse
    } catch (err) {
      if (err instanceof Error) return rejectWithValue({ error: err.message })
    }
  }
)

const pokemonTypeSlice = createSlice({
  name: 'pokemon_type',
  initialState,
  reducers: {
    getTypes: (state, action) => {
      state.types = action.payload.types
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
        state.loading = false
        state.types = action.payload ?? []
      })
      .addCase(fetchPokemonTypes.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonTypes.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default pokemonTypeSlice.reducer
