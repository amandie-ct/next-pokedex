import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface PokemonTypeState {
    types: string[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: PokemonTypeState = {
    types: [],
    status: 'idle',
    error: null
}

export const fetchPokemonTypes = createAsyncThunk<string[], void>(
    'pokemon/fetchTypes',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/type/')
        return response.data.results.map((type: {name: string }) => type.name)
    }
)

const pokemonTypesSlice = createSlice({
    name: 'pokemonTypes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemonTypes.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.types = action.payload
        })
        .addCase(fetchPokemonTypes.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.error.message ?? 'Error fetching Pokemon types'
        })
    }
})


export default pokemonTypesSlice.reducer

