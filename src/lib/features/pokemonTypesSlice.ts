import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface IPokemonTypes {
  types: []
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
      console.log(response.data.results)
      return response.data.results
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
    },
    selectType: (state, action) => {
      state.selectedTypeUrl = action.payload.selectedTypeUrl
    },
    clearSelectedType: (state) => {
      state.selectedTypeUrl = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
        state.loading = false
        state.types = action.payload
      })
      .addCase(fetchPokemonTypes.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchPokemonTypes.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default pokemonTypeSlice.reducer
