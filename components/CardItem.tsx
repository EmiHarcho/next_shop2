import React, { ReactElement, useRef } from 'react'
import styles from '../styles/cardItem.module.scss'
import Image from 'next/image'
import { CardType } from '@/redux/cards/types'
import { useAppDispatch } from '@/redux/store'
import { ADD_ITEM} from '@/redux/basket/slice'
import getItemsLS from '@/utils/getItemsLS'

type PopupClick =  MouseEvent & {path : Node[]}

const CardItem : React.FC<CardType> = ({id, price, sizes, img, count, name}) => {

    const dispatch = useAppDispatch()
    
    //REF
    const sizesBlock = useRef<HTMLDivElement>(null)
    const cardItemBlock = useRef<HTMLDivElement>(null)
    const addItemButton = useRef<HTMLSpanElement>(null)
    
    //STATES
    const [cardITemState, setCardItemState] = React.useState(false)
    const [activeSize, setActiveSize] = React.useState<string>(sizes[0])
    
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

    //OPEN SIZES LIST
    const openSizesList = () => {
      sizesBlock.current && sizesBlock.current.classList.toggle(styles.active)
    }

    // ADD NEW ACTIVE SIZE
    const addNewActiveSize = (size : string) => {
      setActiveSize(size)
    } 

    //OUTSIDE CARD
    const clickOutside = (event : MouseEvent) => {
      const _event = event as PopupClick
      cardItemBlock.current && !_event.composedPath().includes(cardItemBlock.current) && cardITemState && openCard()
    } 

    //ADD EVENTS
    React.useEffect(() => {
      document.addEventListener('click', clickOutside)
      return () => document.removeEventListener('click', clickOutside)
    }, [cardITemState])

    //FLAY TO BASKET ANIMATIONS

    //SIZES              
    const sizesOptions = sizes.map((size, i) => (
        <li key={i} 
            className={styles.size_item} 
            onClick={() => addNewActiveSize(size)}
        >{size}</li>
    ))
    
  return (
    <div className={styles.cardsItem} ref={cardItemBlock}>
      <Image loader={() => img} src={img} width={230} height={330} className={styles.front_side} alt='img'/>
      <div className={styles.inner}>
        
          {/* FRONT SIDE */}
          <span className={styles.price}>{price}₽</span>
          
          <span className={styles.name}>{name}</span>
          {/* BUTTON */}
          <span className={styles.add_card_front} 
                onClick={openCard}>
                  Добавить в корзину
          </span>
  
          {/* BACK SIDE */}
          <div className={styles.back_side}>
                {/* SIZES */}
            <h5>Выберите размер</h5>
            <div className={styles.sizes_block} ref={sizesBlock} onClick={openSizesList}>
              <span className={styles.active_size}>{activeSize}</span>
              <ul className={styles.sizes_list}>
                {sizesOptions}
              </ul>
            </div>
            {/* BUTTON */}
            <span className={styles.add_card_btn} 
                  onClick={addToBasket} 
                  ref={addItemButton}>
              Добавить в корзину
            </span>
        </div>
      </div>
    </div>
  )
}

export default CardItem