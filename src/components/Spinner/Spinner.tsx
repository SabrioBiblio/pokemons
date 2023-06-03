import styles from './styles.module.scss'
import loading from '../../assets/images/loading.png'

const Spinner = () => {
  return (
    <div className={styles.pokebalLoading}>
      <img src={loading} alt="" />
    </div>
  )
}

export default Spinner