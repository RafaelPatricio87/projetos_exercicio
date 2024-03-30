const total = document.getElementById('total')
const btn = document.getElementById('btn')
const menor = document.getElementById('menor')
const maior = document.getElementById('maior')
const sorteador = document.querySelector('.num-sorteados')


function sortear(){
  sorteador.innerHTML = ''
  let min = +menor.value
  let max = +maior.value
  let totalNumeros = +total.value
  for(let i = 0; i < totalNumeros; i++){

    let resul = Math.floor(Math.random() * (max - min) + min)
    
      mostrarVisor(resul)
  }
}
function mostrarVisor(el){
  
  let div = document.createElement('div')
  div.classList.add('num-sorteado')
  div.innerHTML = el
  sorteador.appendChild(div)
 console.log(el)
}

btn.addEventListener('click',sortear)


