import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from '../styles/layout.module.scss'

const Layout = ({children} : any) => (
    <div className={styles.layout}>
      <Header/>
        {children}
      <Footer/>
    </div>
)

export default Layout