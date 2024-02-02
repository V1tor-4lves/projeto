let listaDeNumerosSorteados = [];
let numeroLimite = 40;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
};


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1? 'Tentativas' : 'Tentativa'
    let mensagemTentativas = `Parabéns!! você acertou com ${tentativas} ${palavraTentativa}`
    if(chute == numeroSecreto)
    {
        exibirTextoNaTela('h1','Você acertou!');
        exibirTextoNaTela('p', mensagemTentativas);    
    }
    
    else{
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p','Número secreto é menor.');
        }
        else{
            exibirTextoNaTela('p','Número secreto é maior');
        }
        tentativas++;
        limparCampo()
    } 
    document.getElementById('reiniciar').removeAttribute('disabled');
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidaeDeNumerosSorteados = listaDeNumerosSorteados.length
    if(quantidaeDeNumerosSorteados == numeroLimite)
    {listaDeNumerosSorteados=[]}
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();}
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
    }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
};

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true)
};