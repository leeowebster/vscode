const UserDetails = (people) => {
  return (
    <div>
        
            <ul>
                <li>Nome: {people.nome}</li>
                <li>Idade: {people.idade}</li>
                <li>Profissão: {people.profissao}</li>
                {people.idade > 18 ? <li>Pode dirigir</li> : <li>Não pode dirigir</li>}
                
            </ul>
        
    </div>
  )
}

export default UserDetails