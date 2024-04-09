const btnsNum = document.querySelectorAll('.num')
const btnsOp = document.querySelectorAll('.operador')
const visor = document.querySelector('.visor')
const igual = document.querySelector('.igual')
let operator = false

// calculadora quase pronto 
// falta a virgula
// falta adicionar o btn de reset e delete

function soma(){
  const expressao = visor.textContent.replace(/X/g, '*')
   const resultado = eval(expressao)
  console.log(resultado)
}
function mostrarVisor(paran){ 
  if(visor.textContent == '0' ){
    visor.textContent = paran
  }else{
    visor.textContent += paran
    operator = false  
  }
}

function selectNum(e){
  const valor = e.target.textContent;
  mostrarVisor(valor)
}

function selectOP(e){
  const operador = e.target.textContent;
  if(!operator){
      mostrarVisor(operador)
      operator = true

    
  }
  
 
}

igual.addEventListener('click', soma)
btnsNum.forEach(btn => btn.addEventListener('click',selectNum))
btnsOp.forEach(btn => btn.addEventListener('click',selectOP))
