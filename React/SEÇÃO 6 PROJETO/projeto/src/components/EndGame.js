import './EndGame.css'

const EndGame = ({restartGame}) => {
  return (
    <div><h2>End game</h2>
      <button onClick={restartGame} >Clique aqui para reiniciar o jogo.</button>
    </div>
  )
}

export default EndGame