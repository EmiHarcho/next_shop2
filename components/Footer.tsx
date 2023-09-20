import React from 'react'
import styles from '../styles/footer.module.scss'
import Image from 'next/image'
import telegram_icon from '../img/Footer/tg_logo.png'
import insta_logo from '../img/Footer/Insta_logo.png'
import phone_logo from '../img/Footer/phone_logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Мы обратим внимание на ваши предпочтения и поможем подобрать идеальную одежду, которая подчеркнет вашу индивидуальность и стиль</h3>
        <hr/>
        <div className={styles.footer_icons}>
          <Image src={telegram_icon} alt='telegram_icon' width={60}/>
          <Image src={insta_logo} alt='insta_logo' width={60}/>
          <Image src={phone_logo} alt='phone_logo' width={60}/>
        </div>
    </footer>
  )
}

export default Footer