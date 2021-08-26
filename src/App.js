import React from 'react';
import styles from './App.module.css';
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import Main from './components/Main'

function App() {


  
  return (
    <>
    <div className={styles.titleCounter}>
    <Header/>
    <ScoreBoard/>
    </div>
    <Main/>
    </>
  );
}

export default App;
