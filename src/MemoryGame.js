import React, {useState, useEffect} from 'react'
import styles from './App.module.css'
import uno from './icons/01.png'
import dos from './icons/02.png'
import tres from './icons/03.png'

const MemoryGame= ({highScore, setHighScore}) =>{
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])
  
    const villagers = [
      uno,
      dos,
      tres,
    ]
  
    useEffect(() => {
    }, [game])
  
    if (flippedIndexes.length === 2) {
    }
  
    if (game.length === 0) return <div>loading...</div>
    else {
      return (
        <div className= {styles.cards}>
          {game.map((card, index) => (
            <div className= {styles.card} key={index}>
              <Card
                id={index}
                color={card.color}
                game={game}
                flippedCount={flippedCount}
                setFlippedCount={setFlippedCount}
                flippedIndexes={flippedIndexes}
                setFlippedIndexes={setFlippedIndexes}
              />
            </div>
          ))}
        </div>
      )
    }
  }
  
  function Card(props) {
    return <div>i'm a card</div>
  }