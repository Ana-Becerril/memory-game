import React from 'react'
import styles from './style.module.css'

const Modal = ({message, handleButton}) => {
    return (
        <>
        <div className={styles.modal}>
            <div className={styles.modalContent}>{message}
            <button onClick={handleButton}> Try Again! </button>
            </div>
        </div>
        </>
    );
}

export default Modal;