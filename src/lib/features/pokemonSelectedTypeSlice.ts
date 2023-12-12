import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface PokemonSelectedTypeState {
    selectedType: number | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: PokemonSelectedTypeState = {
    selectedType: null,
    status: 'idle',
    error: null
}

export const fetchPokemonSelectedType = createAsyncThunk<number, void>(
    'pokemon/fetchSelectedType',
    async (selectedType) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
        console.log(response.data.names)
        return response.data.names
    }
)

const pokemonSelectedTypeSlice = createSlice({
    name: 'pokemonSelectedType',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemonSelectedType.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPokemonSelectedType.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.selectedType = action.payload
        })
        .addCase(fetchPokemonSelectedType.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Error fetching Pokemon from selected type'
        })
    }
})

export default pokemonSelectedTypeSlice.reducer

