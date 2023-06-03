import { FC, MouseEvent } from 'react'

import styles from './style.module.scss'

interface Props{
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className={styles.customButton}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button