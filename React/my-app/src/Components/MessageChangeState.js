const MessageChangeState = ({handleMessage}) => {
    const messages = ["Olá", "Oi meu amigo", "Estou funcionando"];
    return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
        <button onClick={() => handleMessage("")}>APAGA</button>
        
    </div>
  )
}

export default MessageChangeState