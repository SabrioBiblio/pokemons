import { ChangeEvent } from 'react'

import styles from './style.module.scss'
import gridIcon from '../../assets/svg/grid-views.svg'
import listIcon from '../../assets/svg/list-views.svg'
import { getSearchQuery, getUserSettingView } from '../../redux/selectors'
import { setSearchQuery } from '../../redux/slices/pokemonsSearchSlice'
import { setView } from '../../redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const Header = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(getSearchQuery)
  const viewState = useAppSelector(getUserSettingView)

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value))
  }

  const clickViewHandler = () => {
    dispatch(setView())
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <input
          placeholder='Example: pikachu'
          value={searchQuery}
          onChange={(e) => inputHandler(e)}
          className={styles.pokemonSearch}
          type="text"
        />
        <div className={styles.headerTools}>
          <div 
            className='header__tools__view'
            onClick={clickViewHandler}
          >
            <img src={viewState ? gridIcon : listIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header