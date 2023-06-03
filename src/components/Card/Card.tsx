import { FC, useState } from 'react'

import Button from '@components/Button/Button';
import Stats from '@components/Stats/Stats';
import Tags from '@components/Tags/Tags';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.scss'
import { Pokemon } from '../../types/pokemon.interface'
import { firstLetterUpp } from '../../utils/utils';


interface Props {
    pokemon: Pokemon;
}

const Card: FC<Props> = ({ pokemon }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  const onMouseEnterHandler = () => {
    setIsHovered(true)
  }

  const onMouseLeaveHandler = () => {
    setIsHovered(false)
  }

  const detailsHandler = () => {
    navigate(`/detail?id=${pokemon.id}`)
  }

  return (
    <div 
      className={styles.pokemonCardWrapper}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className={`${styles.pokemonCardContent}${isHovered ? ` ${styles.flip}` : ''}`}>
        <div className={styles.pokemonCardFront}>
          <div className={styles.pokemonCardImageWrapper}>
            <img 
              className={styles.pokemonCardImage} 
              src={pokemon.sprites.front_default} 
              alt="pokemon" 
            />
          </div>
          <Tags tags={pokemon.types}/>
          <h2 className={styles.pokemonCardName}>{firstLetterUpp(pokemon.name)}</h2>
        </div>
        <div className={styles.pokemonCardBack}>
          <div className='pokemon__card__back-content'> 
            <h2 className={styles.pokemonCardName}>{firstLetterUpp(pokemon.name)}</h2>
            <Stats stats={pokemon.stats}/>
            <Tags tags={pokemon.types}/>
            <p className='pokemon__card__height'>Height: {pokemon.height}</p>
            <p className='pokemon__card__weight'>Weight: {pokemon.weight}</p>
          </div>
          <Button onClick={detailsHandler} text='Details'/>
        </div>
      </div>
    </div>
  )
}

export default Card