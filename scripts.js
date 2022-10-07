//Função criada em um ficheiro externo que mostra uma mensagem

const botao = document.querySelector('.ambiente')

function alerta(){
    window.alert('AIA')
}

botao.addEventListener('click', alerta)