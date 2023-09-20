import React from 'react'
import styles from '../styles/info_block.module.scss'

const Info_block = () => {
  return (
    <div className={styles.info_block}>
        <h2>Неповторимый стиль</h2>
        <div className={styles.btn}>Контакты</div>
        <p>У нас вы найдете всё, что нужно для создания потрясающих образов, вдохновленных последними модными трендами.</p>
    </div>
  )
}

export default Info_block