import React from 'react'
import styles from './style.module.css'

const Card = ({alt, image, name, scoreCounter, id, shuffle, cards}) => {
  return (
    <div className={styles.card}>
      <div className="card" onClick={function(cards){ scoreCounter(); shuffle(cards);}}>
        <div className={styles.imgContainer}>
          <img alt={alt} src={image} />
        </div>
        <div className={styles.content}>
              <div name={name}>{name}</div>
        </div>
      </div>
     </div>
  );
}

export default Card;