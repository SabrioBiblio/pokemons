// hook for bonus
import { useEffect } from 'react'

import { getPokemons } from '../../redux/slices/pokemonsSlice';
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const useGetPokemons = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons())
  }, [])
    
  return state
}