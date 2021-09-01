import React, { useState, useEffect } from "react";
import Card from './components/Card';
import Wrap from './components/Wrap'
import Header from './components/Header'
import cards from "./cards.json";
import styles from './App.module.css'

const App = () => {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

return (
<>
  <div className={styles.title}>
  <Header/>
  <div className={styles.score}>
  <h2>High Score:</h2>
  <h2>Score:</h2>
  </div>
  </div>
 
  <Wrap>
  <div className={styles.cardsContainer}>
          {cards.map(cards => (
            <Card
              key={cards.id}
              id={cards.id}
              name={cards.name}
              image={cards.image}
              alt={cards.alt}
              // selectedImage={selectedImage}
            />
          ))}
        </div>
  </Wrap>
</>

 ) }
export default App;

