import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { Pokemon } from '../../types/pokemon.interface';

interface PokemonShort {
  name: string;
  url: string;
}

interface PokemonsState {
  pokemons: Pokemon[];
  pokemon: Pokemon | null;
  isLoading: boolean;
  isLoadingPagination: boolean;
  page: number;
}

const initialState: PokemonsState = {
  pokemons: [],
  pokemon: null,
  isLoading: true,
  isLoadingPagination: false,
  page: 1
}

export const getPokemons = createAsyncThunk<Pokemon[]>(
  "pokemons/getPokemons", 
  async (_, { rejectWithValue }) => {
    const pokemonsQuery: PokemonShort[] = await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.data.results)

    const promises = pokemonsQuery.map((pokemon) => axios.get(pokemon.url));
    const pokemonsAllQuery = await Promise.all(promises).then(res => res);

    const pokemons = pokemonsAllQuery.map(pokemon => pokemon.data)

    return pokemons
  })

export const getPokemonsPagination = createAsyncThunk<Pokemon[], number>(
  "pokemons/getPokemonsPagination",
  async (page, { rejectWithValue }) => {
    const pokemonsQuery: PokemonShort[] = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}`)
      .then(res => res.data.results)

    const promises = pokemonsQuery.map((pokemon) => axios.get(pokemon.url));
    const pokemonsAllQuery = await Promise.all(promises).then(res => res);

    const pokemons = pokemonsAllQuery.map(pokemon => pokemon.data)

    return pokemons
  })

export const getPokemon = createAsyncThunk<Pokemon, string>(
  "pokemons/getPokemon", 
  async (id, { rejectWithValue }) => {
    const pokemon: Pokemon = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.data)

    return pokemon
  })

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    //We can add a reducer to empty the array "pokemons"
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.isLoading = false;
      })
      .addCase(getPokemon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        state.isLoading = false;
      })
      .addCase(getPokemonsPagination.pending, (state) => {
        state.isLoadingPagination = true;
      })
      .addCase(getPokemonsPagination.fulfilled, (state, action) => {
        state.pokemons = [...state.pokemons, ...action.payload];
        state.page = state.page + 1;
        state.isLoadingPagination = false;
      })
  }
})

export default pokemonsSlice.reducer