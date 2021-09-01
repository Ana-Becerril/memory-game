import React, { useState, useEffect } from "react";
import Card from './components/Card';
import Wrap from './components/Wrap'
import Header from './components/Header'
import cards from "./cards.json";
import styles from './App.module.css'

const App = () => {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [listItems, setListItems] =useState(cards)

  function shuffle(arra1) {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  useEffect(() => {
    setListItems(shuffle(cards))
  })

 const scoreCounter = () => {
   setScore(score+1)
 }
 if (score > highScore) {
  setHighScore(score)
  const json = JSON.stringify(score)
  localStorage.setItem('memorygamehighscore', json)
}


return (
<>
<Wrap>
  <div className={styles.title}>
  <Header/>
  <div className={styles.score}>
  <h2>High Score:{highScore}</h2>
  <h2>Score:{score}</h2>
  </div>
  </div>
  <div className={styles.cardsContainer}>
          {listItems.map(cards => (
            <Card
              scoreCounter={scoreCounter}
              key={cards.id}
              id={cards.id}
              name={cards.name}
              image={cards.image}
              alt={cards.alt}
              shuffle={shuffle}
              cards={cards}
              // selectedImage={selectedImage}
            />
          ))}
        </div>
  </Wrap>
</>

 ) }
export default App;

