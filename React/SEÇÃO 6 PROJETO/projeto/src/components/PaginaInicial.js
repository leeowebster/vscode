import "./PaginaInicial.css"

const PaginaInicial = ({startGame}) => {
  return (
    <div className="pagina_inicial">
      <h1> Secret Word</h1>
      <p>Clique no botão para começar!</p>
      <button onClick={startGame} >Clique aqui para começar!</button>
    </div>
  )
}

export default PaginaInicial