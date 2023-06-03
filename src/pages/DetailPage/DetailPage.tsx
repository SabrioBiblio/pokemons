import { useEffect } from 'react'

import Moves from '@components/Moves/Moves';
import Spinner from '@components/Spinner/Spinner';
import Stats from '@components/Stats/Stats';
import Tags from '@components/Tags/Tags';
import { useSearchParams } from 'react-router-dom';

import { getPokemonState, getPokemonsIsLoading } from '../../redux/selectors';
import { getPokemon } from '../../redux/slices/pokemonsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { firstLetterUpp } from '../../utils/utils';

import './details.scss'

const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const pokemon = useAppSelector(getPokemonState);
  const isLoading = useAppSelector(getPokemonsIsLoading);
  const dispatch = useAppDispatch();
  const id = searchParams.get('id') || '';

  useEffect(() => {
    dispatch(getPokemon(id))
  }, [dispatch, id])

  return (
    <div className='container'>
      {!isLoading ?
        pokemon ? 
          (
            <div className='pokemon__detail-wrapper'>
              <div className='pokemon__detail__left'>
                <img 
                  className='pokemon__detail__image' 
                  src={pokemon?.sprites.front_default} alt="" 
                />
              </div>
              <div className='pokemon__detail__right'>
                <div className='pokemon__detail__right__first-column'>
                  <h2>{firstLetterUpp(pokemon?.name) }</h2>
                  <Stats stats={pokemon.stats}/>
                  <Tags tags={pokemon.types}/>
                  <h2 className='pokemon__detail__height'>Height: {pokemon.height}</h2>
                  <h2 className='pokemon__detail__weight'>Weight: {pokemon.weight}</h2>
                </div>
                <div className='pokemon__detail__right__second-column'>
                  <h2>Moves</h2>
                  <Moves moves={pokemon.moves}/>
                </div>
              </div>
            </div>
          ) : 
          (
            null
          ) : 
        <Spinner/>}
    </div>
  )
}

export default DetailPage
