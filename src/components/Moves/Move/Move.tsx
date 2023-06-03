import { FC, useState } from 'react'

import styles from './style.module.scss'
import { getPokemonMoves } from '../../../redux/slices/movesSlice';
import { useAppDispatch } from '../../../redux/store';
import { Mfe } from '../../../types/pokemon.interface';
import { convertMoveName, getMoveIdFromUrl } from '../../../utils/utils'
import MovesTooltip from '../MovesTooltip/MovesTooltip';

interface Props{
  move: Mfe
}

const Move: FC<Props> = ({ move }) => {
  const dispatch = useAppDispatch();
  const [isTooltip, setIsTooltip] = useState(false);

  const mouseEnterHandler = (url: string) => {
    if(!isTooltip){
      const moveId = getMoveIdFromUrl(url)
      setIsTooltip(true)
      dispatch(getPokemonMoves(moveId))
    }
  }

  const mouseLeaveHandler = () => {
    setIsTooltip(false)
  }

  return (
    <div
      key={move.move.name}
      className={styles.pokemonMove}
      onMouseEnter={() => mouseEnterHandler(move.move.url)}
      onMouseLeave={mouseLeaveHandler}
    >
      {convertMoveName(move.move.name)}
      {isTooltip ? <MovesTooltip  /> : null}
    </div>
  )
}

export default Move