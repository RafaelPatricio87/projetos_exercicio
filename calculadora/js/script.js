const btnsNum = document.querySelectorAll('.num')
const btnsOp = document.querySelectorAll('.operador')
const visor = document.querySelector('.visor')
const igual = document.querySelector('.igual')
const virgula = document.querySelector('.ponto')
const porcento = document.querySelector('.porcento')
const ce = document.querySelector('.ce')
const del = document.querySelector('.del')
let novoNumero = true
let numeroAnterior;
let operador ;
let ponto = false

const contaPendente = () => operador !== undefined

function calcular(){
  if(contaPendente()){
    const numeroAtual = parseFloat(visor.textContent)
    novoNumero = true
    const resultado = eval(`${numeroAnterior} ${operador} ${numeroAtual}`)
    mostrarVisor(resultado)
  }

}
function mostrarVisor(paran){ 
  if(novoNumero){
    visor.textContent = paran
    novoNumero = false
  }else{
    visor.textContent += paran

  }

}


function selectNum(texto){
  const text = texto.target.textContent;
 
mostrarVisor(text)

}


function selectOP(e) {
  if(!novoNumero){
    calcular()
    novoNumero = true
    operador = e.target.textContent;
    numeroAnterior = parseFloat(visor.textContent)
  
  }
  
}







function resetDisplay(){
    visor.textContent = 0
}

function deleteDisplay() {
  let textoVisor = visor.textContent.slice(0, -1)
  visor.textContent = textoVisor
}
function adicionaVirgula(){
  let ultimoEl = visor.textContent[visor.textContent.length - 1];
  if (!visor.textContent.includes('.') && ultimoEl !== 'X' && ultimoEl !== '+' && ultimoEl !== '-' && ultimoEl !== '/') {
    visor.textContent  += '.';
    ponto = true;
  }
}
function ativarIgual(){
   calcular()
   operador = undefined
}

igual.addEventListener('click', ativarIgual)
btnsNum.forEach(btn => btn.addEventListener('click',selectNum))
btnsOp.forEach(btn => btn.addEventListener('click',selectOP))

virgula.addEventListener('click', adicionaVirgula)
ce.addEventListener('click',resetDisplay)
del.addEventListener('click',deleteDisplay)
porcento.addEventListener('click', () => visor.textContent += porcento.textContent)
