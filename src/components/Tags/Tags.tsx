import { FC } from "react"

import styles from './style.module.scss'
import { Type } from "../../types/pokemon.interface"
import { firstLetterUpp } from "../../utils/utils"

interface Props{
  tags: Type[]
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className={styles.pokemonTypesWrapper}>
      {tags.map((type) => (
        <div key={type.type.name} className={`${styles.pokemonType} ${styles[type.type.name]}`}>
          {firstLetterUpp(type.type.name)}
        </div>
      ))}
    </div>
  )
}

export default Tags