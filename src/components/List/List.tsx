import { FC } from "react";

import Button from "@components/Button/Button";
import Tags from "@components/Tags/Tags";
import { useNavigate } from "react-router-dom";

import styles from './style.module.scss'
import { Pokemon } from "../../types/pokemon.interface";
import { firstLetterUpp } from "../../utils/utils";

interface Props {
  pokemon: Pokemon;
}

const List: FC<Props> = ({ pokemon }) => {
  const navigate = useNavigate();

  const detailsHandler = () => {
    navigate(`/detail?id=${pokemon.id}`)
  }

  return (
    <div 
      className={styles.pokemonListWrapper}
    >
      <div className={styles.pokemonListContent}>
        <div className="pokemon__list__first-wrapper">
          <img 
            className='pokemon__list__image' 
            src={pokemon.sprites.front_default} 
            alt="pokemon" 
          />
        </div>
        <div className="pokemon__list__second-wrapper">
          <h2 className='pokemon__card__name'>{firstLetterUpp(pokemon.name)}</h2>
          <Tags tags={pokemon.types}/>
        </div>
        <div className={styles.pokemonListThirdWrapper}>
          <Button text="Details" onClick={detailsHandler}/>
        </div>
      </div>
    </div>
  )
}

export default List