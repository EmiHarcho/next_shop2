import React from 'react'
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import logo from '../img/Header/logo.png'
import Link from 'next/link'




const Header = () => (
  <header className={styles.header}>
    <Image src={logo} alt='logo' width={100} />

    <div className={styles.header_rigth}>
      <Link href='/basket'>
        <span className={styles.totalCount}>3</span>
      </Link>

      <div className={styles.hidden_block}>
        <div className={styles.totalInput}>
            <p className={styles.title}>Price:</p>
            <p className={styles.totalResult}>1200$</p>
        </div>
        <div className={styles.totalInput}>
            <p className={styles.title}>Count:</p>
            <p className={styles.totalResult}>10</p>
        </div>
        <Link className={styles.viev_basket} href='/basket'>В корзину</Link>
      </div>
    </div>
  </header>
)

export default Header