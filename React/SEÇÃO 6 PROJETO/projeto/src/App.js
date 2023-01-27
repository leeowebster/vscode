//css
import './App.css';
// React
import {useState, useCallback, useEffect} from 'react'

// data
import { wordsList } from './data/words.js'

// components
import PaginaInicial from './components/PaginaInicial';
import Game from './components/Game.js'
import EndGame from './components/EndGame.js'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState (wordsList)
  
  

  const startGame = () => (
    console.log(Object.keys(words)),


    setGameStage(stages[1].name)
  )

  const endGame = () => {
    setGameStage(stages[2].name)
  }
  
  const restartGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <PaginaInicial startGame={startGame}/>}
      {gameStage === 'game' && <Game  endGame={endGame} />}
      {gameStage === 'end' && <EndGame restartGame={restartGame} />}


    </div>
  );
}

export default App;
