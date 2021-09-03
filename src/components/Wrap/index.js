import React from 'react'
import styles from './style.module.css'


const Wrap = ({children}) => {

    return (
        <>
        <div className={styles.containerGame}>
        <div>{children}</div>
        </div>
        </>
    )
}


export default Wrap;