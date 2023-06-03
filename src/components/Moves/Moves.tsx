import { FC } from 'react';

import Move from './Move/Move';
import styles from './style.module.scss'
import { Mfe } from '../../types/pokemon.interface'


interface Props{
  moves: Mfe[];
}

const Moves: FC<Props> = ({ moves }) => {
  return (
    <div className={styles.pokemonMoves}>
      {moves.map(move => (
        <Move move={move}/> 
      ))}
    </div>
  )
}

export default Moves