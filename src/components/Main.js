import React from 'react';
import styles from '../App.module.css'
import Card from './card/Card'

const Main = () => {
    return (
        <>
          <div className={styles.mainContainer}>
                <header>Main</header>
                <Card></Card>
            </div>
        </>
    );
}

export default Main;