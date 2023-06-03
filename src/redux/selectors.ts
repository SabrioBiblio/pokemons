import { RootState } from "./store";

export const getPokemonState = (state: RootState) => state.pokemons.pokemon
export const getPokemonsState = (state: RootState) => state.pokemons.pokemons
export const getPokemonsIsLoading = (state: RootState) => state.pokemons.isLoading
export const getPokemonsPage = (state: RootState) => state.pokemons.page
export const getPokemonsIsLoadingPagination = 
(state: RootState) => state.pokemons.isLoadingPagination

export const getMovesState = (state: RootState) => state.moves.moves
export const getMovesIsLoading = (state: RootState) => state.moves.isLoading

export const getPokemonsBySearch = (state: RootState) => state.pokemonsSearch.pokemonsSearch
export const getPokemonsSearchIsLoading = (state: RootState) => state.pokemonsSearch.isLoading
export const getSearchQuery = (state: RootState) => state.pokemonsSearch.searchQuery

export const getUserSettingView = (state: RootState) => state.userSettings.gridView