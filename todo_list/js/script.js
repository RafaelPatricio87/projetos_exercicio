const fechar = document.querySelector('.fechar')
const btn = document.querySelector('.btn')
const editar = document.querySelector('.editar')
const input_tarefa = document.querySelector('.input_tarefa')
const enviar = document.querySelector('.enviar')
const todoList = document.getElementById('todoList')

function criarTarefa(){
  const tarefa = input_tarefa.value
  const p = document.createElement('p')
  const li = document.createElement('li')
  const div = document.createElement('div')

  p.textContent = tarefa

  const spanPen = document.createElement('span')
  spanPen.classList.add('icon-pen')
  const spanBin = document.createElement('span')
  spanBin.classList.add('icon-bin')
  
  div.appendChild(spanBin)
  div.appendChild(spanPen)

  li.appendChild(p)
  li.appendChild(div)

  todoList.appendChild(li)

}

fechar.addEventListener('click',() => {
  editar.classList.toggle('ativo')
})
enviar.addEventListener('click',criarTarefa)
// criar a funcao que armazena as tarefas
