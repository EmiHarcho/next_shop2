import React from 'react'
import Footer from './Footer'
import styles from '../styles/layout.module.scss'
import dynamic from 'next/dynamic'
const NoSSRheader = dynamic(() => import('../components/Header'), { ssr: false })

const Layout = ({children} : any) => (
    <div className={styles.layout}>
      <NoSSRheader/>
        {children}
      <Footer/>
    </div>
)

export default Layout