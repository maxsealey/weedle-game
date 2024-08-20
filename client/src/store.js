import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (id) => {
        const response = await axios.get(`/api/pokemon/${id}`);
        return response.data;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data.push(action.payload);
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
    },
});