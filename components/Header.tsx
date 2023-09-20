import React from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import logo from '../img/Header/logo2.png'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const Header = () => {

  const {totalCount, totalPrice} = useSelector((state: RootState) => state.basket)
  const cardIcon = React.useRef<HTMLSpanElement>(null)
     
  return(
    <header className={styles.header}>
    <Image src={logo} alt='logo' width={80}/>

    <div className={styles.header_rigth}>
        <span className={styles.totalCount} ref={cardIcon}>{totalCount}</span>

      <div className={styles.hidden_block}>
        <div className={styles.totalInput}>
            <p className={styles.title}>Price:</p>
            <p className={styles.totalResult}>{totalPrice}</p>
        </div>
        <div className={styles.totalInput}>
            <p className={styles.title}>Count:</p>
            <p className={styles.totalResult}>{totalCount}</p>
        </div>
        <Link className={styles.viev_basket} href='/basket'>В корзину</Link>
      </div>
    </div>
  </header>
  )
}

export default Header