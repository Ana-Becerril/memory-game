import React from 'react'
import styles from './style.module.css'

const Header = () => {
    return (
        <>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Memory Game</h1>
        </div>
        </>
    );
}

export default Header;