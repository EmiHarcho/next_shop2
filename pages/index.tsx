import React from 'react'
import styles from '../styles/home.module.scss'
import {fetchCards} from '../redux/cards/slice'
import { useAppDispatch, useAppSelector} from '../hooks/hooks'
import { RootState } from '@/redux/store'
import { CardType } from '@/redux/cards/types'
import CardItem from '@/components/CardItem'

const Home = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchCards())
  }, [])

  const {items} = useAppSelector((state : RootState) => state.cards)
  
  return (
    <div className={styles.home}>
        <div className={styles.cardsList}>
          {items.map((item : CardType) => <CardItem {...item} key={item.id}/>)}
      </div>
    </div>
  )
}
export default Home