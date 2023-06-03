import { FC } from "react"

import styles from './style.module.scss'
import { Stat } from "../../types/pokemon.interface"
import { firstLetterUpp } from "../../utils/utils"

interface Props{
  stats: Stat[]
}

const Stats: FC<Props> = ({ stats }) => {
  return (
    <div className={styles.pokemonDetailStatsWrapper}>
      {stats.map(stat => (
        <div key={stat.stat.name} className={styles.pokemonDetailStatWrapper}>
          <span className={styles.pokemonDetailStat}>
            <span className={styles.stat} style={{ height: `${stat.base_stat}%` }}/>
            <span className={styles.statName}>{firstLetterUpp(stat.stat.name)}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Stats