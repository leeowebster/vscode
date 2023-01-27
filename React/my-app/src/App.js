import './App.css';
import {useState} from 'react';
import Message from './Components/Message';
import MessageChangeState from './Components/MessageChangeState';
import UserDetails from './Components/UserDetails';


function App() {

  const [people] = useState([
      {key: 0, nome: "Leonardo", idade: 22, profissao: 'Auxiliar'},
      {key: 1, nome: "Robson", idade: 15, profissao: 'Ajudante'},
      {key: 2, nome: "Jorge", idade: 30, profissao: 'Chefe'}
  ]);
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <Message msg={message}/>
      <MessageChangeState handleMessage={handleMessage}/>

      {/* Desafio 4 */}
      {
        people.map((people) =>
          <UserDetails key ={people.key} nome={people.nome} idade={people.idade} profissao={people.profissao}/>
        )
      }  

    </div>
  );
}

export default App;
