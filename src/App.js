import React, { useState, useEffect } from "react";
import Card from './components/Card';
import Wrap from './components/Wrap'
import Header from './components/Header'
import cards from "./cards.json";
import Modal from "./components/Modal"
import styles from './App.module.css'

const App = () => {
  const [listItems, setListItems] = useState(cards)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [itemSelected, setItemSelected] = useState([])
  const [showModal, setShowModal] = useState(false);

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
    if (!arr.includes(id)) {
      arr.push(id)
      fnSucces(successParam)
      setItemSelected(arr);
      scoreCounter()
      console.log(arr)
    }
    setShowModal(true)
  }

  useEffect(() => {
    setListItems(shuffle(cards))
  }, [])

  const scoreCounter = () => {
    setScore(score + 1)
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
          <Header />
          <div className={styles.score}>
            <h2>High Score:{highScore}</h2>
            <h2>Score:{score}</h2>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {listItems.map(cards => (
            <Card
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
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
        { showModal ? <Modal/> : null }
      </Wrap>
    </>

  )
}
export default App;

