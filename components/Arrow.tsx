import React from 'react'
import styles from '../styles/arrow.module.scss'

const Arrow = ({}) => (
    <div className={styles.arrowBlock}>
        <input type="checkbox" id={styles.animation1}/>
        <label htmlFor={styles.animation1}>
            <div className={styles.arrow} 
                style={{
                    height: `${3}px`,
                    width: `${24}px`,
                    transform: `rotate(-${90}deg)`,
                }}
            >
            </div>
        </label>
    </div>
)



export default Arrow