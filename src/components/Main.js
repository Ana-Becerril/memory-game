import React from 'react';
import styles from '../App.module.css'
import Card from './card/Card'
const Main = () => {

    return (
        <>
            <div className={styles.mainContainer}>
                <Card
                id={1}
                back={`/images/back.png`}
                front={`/images/matracas.png`}
                // flipped={flipped.includes(1)}
                // handleClick={()=> handleCick(1)}
                />
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </>
    );
}

export default Main;