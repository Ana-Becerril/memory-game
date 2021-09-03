import React from 'react'
import styles from './style.module.css'

const Modal = () => {
    return (
        <>
        <div className={styles.modal}>
            <h1 className={styles.modalContent}>Hi, Im a modal, loser!</h1>
        </div>
        </>
    );
}

export default Modal;