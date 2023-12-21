import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type pokemonDetails = {
  base_experience: number
  height: number
  weight: number
  img: string
  pokemon_name: string
  pokemon_number: string
  stats: string
  abilities: string
  pokemon_type: string
}

type pokemonDetailsArray = pokemonDetails[]

interface IPokemonDetails {
  details: pokemonDetailsArray
  loading: boolean
  error: any
}

const initialState: IPokemonDetails = {
  details: [],
  loading: false,
  error: null
}

export const fetchPokemonDetails = createAsyncThunk(
  'fetchPokemonDetails',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )
      const parsedResponse: pokemonDetailsArray = response.data
      return parsedResponse
    } catch (err) {
      if (err instanceof Error) return rejectWithValue({ error: err.message })
    }
  }
)

const pokemonDetailsSlice = createSlice({
  name: 'pokemon_details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loading = false
        state.details = action.payload ?? []
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default pokemonDetailsSlice.reducer
