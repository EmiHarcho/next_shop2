import BasketEmpty from '@/components/BasketEmpty'
import BasketItem from '@/components/basketItem'
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/basket.module.scss'
import { REMOVE_ALL } from '@/redux/basket/slice'

const Basket = () => {
  const dispatch = useDispatch()

  const basketItems = useSelector((state : RootState) => state.basket.basketItems)
  const items = basketItems.map((item) => (<BasketItem {...item} key={item.id}/>))

  const removeAll = () => {
    dispatch(REMOVE_ALL())
  }

  return (
    <div className={styles.basket}>
        {/* HEADER */}
        <div className={styles.basket_header}>
          <h2>Корзина</h2>
          <div className={styles.clear} onClick={removeAll}>Очистить</div>
        </div>
        {/* CARDS */}
        <div className={styles.basket_list}>
          {basketItems.length ? items : <BasketEmpty/>}
        </div>
    </div> 
  )
}

export default Basket