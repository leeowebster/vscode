import { useState } from 'react'
import EndGame from './EndGame'
import './Game.css'

const Game = ({verifyLetter,
pickedWord,
pickedCategory,
letters,
guessedLetters,
wrongLetters,
guesses,
score,
}) => {

  const [letter, setLetter] = useState('')

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span> {pickedCategory}</span>
      </h3>
      <p> voce tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter,i) => 
            guessedLetters.includes(letter) ? ( 
              <span key={i} className="letter" >
                {letters}
              </span>
            )
            :(
              <span key={i} className="blackSquare" ></span>
            )
        )}
        <span className="blacksquare"></span>
         </div>
         <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra:</p>
          <form >
            <input type="text" name="letter" maxLength="1" required/>
            <button>jogar!</button>
          </form>

          <div className="wrongLetterContainer">
            <p>Letras já utilizadas:</p>
            {wrongLetters.map((letter,i ) => (
              <span key={i}>{letter}</span>
            ))}
          </div>
         </div>
    </div>
  )
}

export default Game