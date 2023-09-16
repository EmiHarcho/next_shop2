import React from 'react'
import styles from '../styles/basketItem.module.scss'
import Image from 'next/image'
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ONE_ITEM } from '@/redux/basket/slice'
import { BasketCardType } from '@/redux/basket/types'
import { useDispatch } from 'react-redux'

const BasketItem = ({id, price, img, activeSize, count} : BasketCardType) => {
  
  const dispatch = useDispatch()
  
  //ADD TO BASKET
  const addToBasket = () => {
      const item = {id, price, img, activeSize, count}
      dispatch(ADD_ITEM(item))    
  }
  //REMOVE 1 ITEM FROM BASKET
  const removeOneItemFromBasket = () => {
    dispatch(REMOVE_ONE_ITEM({id, activeSize}))
  }

  return (
    <div className={styles.basketItem}>
      <Image loader={() => img} src={img} alt='img' width={100} height={100}/>
      <div className={styles.size}>{activeSize}</div>
      <span className={styles.price}>{price}₽</span>
      <div className={styles.count_block}>
        <span className={styles.plus} onClick={removeOneItemFromBasket}>-</span>
        <h4 className={styles.count}>{count}</h4>
        <span className={styles.minus} onClick={addToBasket}>+</span>
      </div>
    </div>
  )
}

export default BasketItem