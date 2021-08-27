import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import styles from './App.module.css'

const App = () => {
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <h1>Memory Game</h1>
        <div>High Score: {highScore}</div>
      </div>
    </div>
    
  )
}

export default App;

