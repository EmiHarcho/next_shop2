import BasketEmpty from '@/components/BasketEmpty'
import BasketItem from '@/components/basketItem'
import { RootState } from '@/redux/store'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import styles from '../styles/basket.module.scss'
import { REMOVE_ALL } from '@/redux/basket/slice'
import { BasketCardType } from '@/redux/basket/types'

const Basket = () => {
  const dispatch = useAppDispatch()

  const [isMounted, setIsMounted] = React.useState(false)
  const {basketItems, totalPrice} = useAppSelector((state : RootState) => state.basket)
  const items = basketItems.map((item : BasketCardType) => (<BasketItem {...item} key={item.id}/>))
  
  const removeAll = () => {
    dispatch(REMOVE_ALL())
  }

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMounted &&
    <div className={styles.basket}>
      {/* HEADER */}
      {basketItems.length ? 
        <div className={styles.basket_header}>
            <h2>Корзина</h2>
            <div className={styles.clear} onClick={removeAll}>Очистить</div>
        </div> : ''
      }
      {/* TOTAL BLOCK */}
      {basketItems.length ? 
        <div className={styles.total_block}>
            <div className={styles.total_info}>Цена: {totalPrice}₽</div>
        </div> : ''
      }
      {/* CARDS */}
      <div className={styles.basket_list}>
        {basketItems.length ? items : <BasketEmpty/>}
      </div>
    </div> 
  )
}

export default Basket