import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type Abilities = {
  ability: string
  is_hidden: boolean
  slot: number
}

type pokemonDetails = {
  base_experience: number
  height: number
  weight: number
  img: string
  name: string
  id: number
  stats: string
  abilities: Abilities[]
  pokemon_type: string
}

interface IPokemonDetails {
  details: pokemonDetails
  loading: boolean
  error: any
}

const initialState: IPokemonDetails = {
  details: {
    base_experience: 0,
    height: 0,
    weight: 0,
    img: '',
    name: '',
    id: 0,
    stats: '',
    abilities: [],
    pokemon_type: ''
  },
  loading: false,
  error: null
}

export const fetchPokemonDetails = createAsyncThunk(
  'fetchPokemonDetails',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )
      const parsedResponse: pokemonDetails = response.data
      return parsedResponse
    } catch (err) {
      if (err instanceof Error) return rejectWithValue({ error: err.message })
      throw Error
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
