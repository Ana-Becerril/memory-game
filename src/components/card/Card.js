import React from 'react';
import styles from './Card.module.css'
import matracas from '../images/matracas.png'

const Card = () => {
    const mystyle = {
        width:"100px",
        heigth:"100px"
      };

    return (
        <>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <img src={matracas} alt={"Avatar"} style={mystyle}></img>
                    </div>
                    <div className={styles.flipCardBack}>
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;