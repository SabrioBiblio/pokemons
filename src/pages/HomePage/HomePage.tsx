
import { useEffect } from 'react';

import Card from '@components/Card/Card';
import Header from '@components/Header/Header';
import List from '@components/List/List';
import Spinner from '@components/Spinner/Spinner';

import { useGetPokemons } from '../../hooks/API/useGetPokemons';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { 
  getPokemonsBySearch,
  getPokemonsIsLoadingPagination, 
  getPokemonsPage, 
  getPokemonsSearchIsLoading, 
  getSearchQuery, 
  getUserSettingView 
} from '../../redux/selectors';
import { 
  clearPokemonsSearch, 
  getPokemonsBySearchQuery 
} from '../../redux/slices/pokemonsSearchSlice';
import { getPokemonsPagination } from '../../redux/slices/pokemonsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

import './homepage.scss'

const HomePage = () => {
  const { pokemons, isLoading } = useGetPokemons()
  const dispatch = useAppDispatch()
  const isLoadingSearch = useAppSelector(getPokemonsSearchIsLoading)
  const searchQuery = useAppSelector(getSearchQuery)
  const searchPokemons = useAppSelector(getPokemonsBySearch)
  const viewState = useAppSelector(getUserSettingView)
  const page = useAppSelector(getPokemonsPage)
  const isLoadingPagination = useAppSelector(getPokemonsIsLoadingPagination)

  const paginationHandler = () => {
    dispatch(getPokemonsPagination(page))
  }
  const [,] = useInfiniteScroll(paginationHandler)

  useEffect(() => {
    if(searchQuery !== '' && searchQuery.length > 2){
      dispatch(getPokemonsBySearchQuery(searchQuery))
    }
    if(!searchQuery.length){
      dispatch(clearPokemonsSearch())
    }
  }, [dispatch, searchQuery])

  return (
    <div className='container'>
      <Header/>
      {!isLoading || !isLoadingSearch ? 
        !searchQuery.length ? 
          (
            <div className={`pokemons__main-wrapper${viewState ? ' grid-view' : 'list-view'}`}>
              {viewState ? 
                pokemons.map(pokemon => (
                  <Card key={pokemon.id} pokemon={pokemon}/>
                )) : 
                pokemons.map(pokemon => (
                  <List key={pokemon.id} pokemon={pokemon}/>
                ))}
            </div> 
          ) : 
          searchPokemons ?
            (
              <div className={`pokemons__main-wrapper${viewState ? ' grid-view' : 'list-view'}`}>
                {viewState ? 
                  <Card pokemon={searchPokemons}/> : 
                  <List pokemon={searchPokemons}/>}
              </div>
            ) : 
            <div className='pokemons__search__empty'>
                We didn't find any pokemon for: {searchQuery}
            </div> 
        : 
        <Spinner />
      }
      {isLoadingPagination && <Spinner />}
    </div>
  )
}

export default HomePage
