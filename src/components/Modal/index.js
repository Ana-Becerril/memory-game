import React from 'react'
import styles from './style.module.css'

const Modal = ({message}) => {
    return (
        <>
        <div className={styles.modal}>
            <div className={styles.modalContent}>{message}
            <button> Try Again! </button>
            </div>
        </div>
        </>
    );
}

export default Modal;