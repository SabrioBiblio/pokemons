import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { Pokemon } from '../../types/pokemon.interface';

interface PokemonsState {
  pokemonsSearch: Pokemon | null;
  searchQuery: string;
  isLoading: boolean;
}

const initialState: PokemonsState = {
  pokemonsSearch: null,
  searchQuery: '',
  isLoading: true,
}

export const getPokemonsBySearchQuery = createAsyncThunk<Pokemon, string>(
  "pokemonsSearch/getPokemonsBySearch", async (string, { rejectWithValue }) => {
    const pokemons: Pokemon = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${string.toLowerCase()}/`)
      .then(res => res.data)

    return pokemons
  })

export const pokemonsSlice = createSlice({
  name: 'pokemonsSearch',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    clearPokemonsSearch: (state) => {
      state.pokemonsSearch = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonsBySearchQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemonsBySearchQuery.fulfilled, (state, action) => {
        state.pokemonsSearch = action.payload
        state.isLoading = false;
      })
  }
})

export const { setSearchQuery, clearPokemonsSearch } = pokemonsSlice.actions

export default pokemonsSlice.reducer