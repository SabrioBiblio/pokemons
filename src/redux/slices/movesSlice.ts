import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { Moves } from '../../types/moves.interface';

interface MovesState {
    isLoading: boolean;
    moves: Moves | null;
}

const initialState: MovesState = {
  isLoading: true,
  moves: null,
}

export const getPokemonMoves = createAsyncThunk<Moves, string>(
  "moves/getPokemonMoves", async (id, { rejectWithValue }) => {
    const moves: Moves = await axios
      .get(`https://pokeapi.co/api/v2/move/${id}/`)
      .then(res => res.data)
  
    return moves
  })

export const movesSlice = createSlice({
  name: 'moves',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonMoves.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemonMoves.fulfilled, (state, action) => {
        state.moves = action.payload
        state.isLoading = false;
      })
  }
})

export default movesSlice.reducer