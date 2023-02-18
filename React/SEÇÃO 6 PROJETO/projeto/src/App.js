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

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState('')

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };

  }
  

  const startGame = () => {
    // pick word and category
    const { word, category } = pickWordAndCategory();
    
    // Create an array of letters
    
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    
    console.log(wordLetters)
    console.log(word, category);

    // Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  
  const restartGame = () => {
    setGameStage(stages[0].name)
  }

  return (
  <div className="App">   
      {gameStage === 'start' && <PaginaInicial startGame={startGame}/>}

      {gameStage === 'game' && <Game  verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score} />}

      {gameStage === 'end' && <EndGame restartGame={restartGame} />}
    </div>
  );
}

export default App;
