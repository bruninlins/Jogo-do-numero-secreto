let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial(){
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute(){
  let chute = document.querySelector("input").value;
  document.getElementById("reiniciar").removeAttribute("disabled");

if(numeroSecreto == chute){
  if(tentativas == 1){
    exibirTextoNaTela("h1", "Você acertou de primeira!");
    exibirTextoNaTela("p", `Meus parabéns, o número secreto era ${numeroSecreto}!`);
  } else{
    exibirTextoNaTela("h1", `você acertou com ${tentativas} tentativas!`);
    exibirTextoNaTela("p", `O número secreto era ${numeroSecreto}!`);
  }
} else if(chute > numeroSecreto){
    exibirTextoNaTela("p", `O número ${chute} é maior que o numero secreto.`);
  }else{
    exibirTextoNaTela("p", `O número ${chute} é menor que o numero secreto.`);
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio(){
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite ){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio()
  } else{ 
    listaDeNumerosSorteados.push(numeroEscolhido);
    /* console.log(listaDeNumerosSorteados); */
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)}