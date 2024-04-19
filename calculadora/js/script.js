const btns = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');
const display = document.getElementById('display')
const igual = document.getElementById('igual')
document.getElementById('limparDisplay')

let novoNumero = true
let numeroAnterior
let operador;

// calculadora quae pronta falta
// CE C << , e inverter

const operacaoPendente = () => operador !== undefined
const calcular = () => {

  novoNumero = true
  if(operacaoPendente()){
     const numeroAtual = parseFloat(display.textContent)
     const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`) 
   
     atualizarDisplay(resultado)  
  }
}

const atualizarDisplay = (texto) => {
   if(novoNumero){
    display.textContent = texto
    novoNumero = false
   }else{
    display.textContent += texto
   }
}

const inserirOperador = (event) => {
   calcular()
   operador = event.target.textContent
   numeroAnterior = display.textContent
   novoNumero = true
   
}
const selecionarIgual = () => {
  calcular()
  operador = undefined
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)


igual.addEventListener('click',selecionarIgual)
operadores.forEach(operador => operador.addEventListener('click',inserirOperador))
btns.forEach(btn => btn.addEventListener('click',inserirNumero))

const limparCalculo = () => {
   operador = undefined
   numeroAnterior = ''
   numeroAtual = ''
   display.textContent = ''
}
document.getElementById('limparCalculo').addEventListener('click',limparCalculo)

const limparDisplay = () =>  display.textContent = ''
document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const backspace = () => display.textContent = display.textContent.slice(0, -1)
document.getElementById('backspace').addEventListener('click',backspace)

const inverter = () => {
   display.textContent = display.textContent * -1
}
document.getElementById('inverter').addEventListener('click', inverter)
