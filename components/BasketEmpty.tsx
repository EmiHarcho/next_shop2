import React from 'react'
import styles from '../styles/basketEmpty.module.scss'
import Image from 'next/image'
import BasketImg from '../img/Basket/basketEmptry.png'
import Link from 'next/link'

const BasketEmpty = () => (

    <div className={styles.basketEmpty}>
        <Image src={BasketImg} alt='img' width={100}/>
        <h2 className={styles.title}>Корзина пуста</h2>
        <Link className={styles.basketEmpty_btn} href='/'>Вернуться назад</Link>
    </div>
)


export default BasketEmpty