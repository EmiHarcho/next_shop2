import React, { useRef } from 'react'
import styles from '../styles/cardItem.module.scss'
import Image from 'next/image'
import { CardType } from '@/redux/cards/types'
import { useAppDispatch } from '@/hooks/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { ADD_ITEM} from '@/redux/basket/slice'
import {BasketCardType} from '../redux/basket/types'

type PopupClick =  MouseEvent & {path : Node[]}

const CardItem : React.FC<CardType> = ({id, price, sizes, img, count}) => {
  const dispatch = useAppDispatch()

  //REF
  const selectBlock = useRef<HTMLDivElement>(null)
  const cardItemBlock = useRef<HTMLDivElement>(null)
  const addItemButton = useRef<HTMLSpanElement>(null)
  
  //STATES
  const [cardITemState, setCardItemState] = React.useState(false)
  const [activeSize, setActiveSize] = React.useState<string>(sizes[0])

  //USE SELECTORS
  const activeBasketItem = useSelector((state : RootState) => state.basket.basketItems.find((obj : BasketCardType) => obj.id === id))
   
  //ADD TO BASKET
    const item = {id, activeSize, price, img, count}
    const addToBasket = () => {
      cardITemState === true && dispatch(ADD_ITEM(item))
    }
  //OPEN CARD
    const openCard = () => {
      setCardItemState(!cardITemState)
      cardItemBlock.current && cardItemBlock.current.classList.toggle(styles.active)
    } 

  //CHANGE ACTIVE SELECT
  const changeActiveSelect = (e : React.ChangeEvent<HTMLSelectElement>) : void => {
    setActiveSize(e.currentTarget.value)
  }
  //TOGGLE SELECT CLASS
  const toggleSelectClass = () => {
    selectBlock.current && selectBlock.current.classList.toggle(styles.active)
  }

  //OUTSIDE CARD
  React.useEffect(() => {
    const clickOutside = (event : MouseEvent) => {
      const _event = event as PopupClick
      cardItemBlock.current && !_event.composedPath().includes(cardItemBlock.current) && cardITemState && openCard()
    }
    document.addEventListener('click', clickOutside)
    return () => document.removeEventListener('click', clickOutside)
  }, [cardITemState])

  //SIZES              
  const sizesOptions = sizes.map((size, i) => (<option key={i} className={styles.size_item}>{size}</option>))

  return (
    <div className={styles.cardsItem} ref={cardItemBlock}>
      <div className={styles.inner}>
        
          {/* FRONT SIDE */}
          <Image loader={() => img} src={img} width={200} height={200} className={styles.front_side} alt='img'/>
          <span className={styles.price}>{price}$</span>
          {/* BUTTON */}
          <span className={styles.add_card_front} 
                onClick={openCard}>
                  ADD TO CART
          </span>
  
          {/* BACK SIDE */}
          <div className={styles.back_side}>
                {/* SIZES */}
            <h5>Размеры</h5>
            <div className={styles.sizes_block} ref={selectBlock}>
              <select className={styles.sizes_select} 
                      value={activeSize} 
                      onChange={changeActiveSelect}
                      onClick={toggleSelectClass}>
                {sizesOptions}
              </select>
            </div>
            {/* BUTTON */}
            <span className={styles.add_card_btn} 
                  onClick={addToBasket} 
                  ref={addItemButton}>
              ADD TO CART
            </span>
        </div>
      </div>
    </div>
  )
}

export default CardItem