import { FC } from "react";

import styles from './styles.module.scss'
import { getMovesState } from "../../../redux/selectors";
import { useAppSelector } from "../../../redux/store";
import { convertMoveName, firstLetterUpp } from "../../../utils/utils";

const MovesTooltip: FC = () => {
  const stateMoves = useAppSelector(getMovesState);

  return (
    <div className={styles.moveTooltip}>
      {stateMoves?.name ? (
        <>
          <h2 className={styles.moveName}>{convertMoveName(stateMoves?.name)}</h2>
          <div className={styles.moveTooltipStats}>
            <p>Accuracy: {stateMoves?.accuracy || 'N/A'}</p>
            <p>Power: {stateMoves?.power || 'N/A'}</p>
            <p>Type: {firstLetterUpp(stateMoves?.type.name)}</p>
          </div>
        </>
      ) : 'loading'}
    </div>
  )
}

export default MovesTooltip