import EndGame from './EndGame'
import './Game.css'

const Game = ({endGame}) => {
  return (
    <div><h2>Game</h2>
          <button onClick={endGame} >Clique aqui para ir pro final do jogo!</button>

    </div>
  )
}

export default Game