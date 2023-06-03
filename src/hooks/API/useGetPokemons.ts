// hook for bonus
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getPokemons } from '../../redux/slices/pokemonsSlice';

export const useGetPokemons = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons())
  }, [])
    
  return state
}