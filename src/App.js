import React, { useState, useEffect } from "react";
import Card from './components/Card';
import Wrap from './components/Wrap'
import Header from './components/Header'
import cards from "./cards.json";
import styles from './App.module.css'

const App = () => {
  const [listItems, setListItems] =useState(cards)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

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

  const idChecker = (id, arr, fnSucces, successParam) => {
    let newArr=[];
    if (!arr.includes(id) ) {
     newArr.push(id)
     fnSucces(successParam)
     console.log(newArr)
    }
    console.log("Ya esta en el array")
  }

   useEffect(() => {
     setListItems(shuffle(cards))
   }, [])


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
              shuffle={shuffle}
              key={cards.id}
              id={cards.id}
              name={cards.name}
              image={cards.image}
              alt={cards.alt}
              cards={listItems}
              idChecker={idChecker}
            />
          ))}
        </div>
  </Wrap>
</>

 ) }
export default App;

