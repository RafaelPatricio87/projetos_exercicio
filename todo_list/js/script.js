const fechar = document.querySelector('.fechar')
const btn = document.querySelector('.btn')
const editar = document.querySelector('.editar')
const input_tarefa = document.querySelector('.input_tarefa')
const enviar = document.querySelector('.enviar')
const todoList = document.getElementById('todoList')



function editarTarefa(e){
  const editando = document.getElementById('editando')
  const div = e.target.parentNode;
  const li = div.parentNode;
  const p = li.querySelector('p');
  const textoTarefa = p.textContent;
  editando.value = textoTarefa;
  editar.classList.add('ativo')
  //falta fazer o foco ir para o texto para digitar
}
function excluirTarefa(event){
  const div = event.target.parentNode
  const li = div.parentNode
  li.remove()
}

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
  spanPen.addEventListener('click',editarTarefa)
  spanBin.addEventListener('click',excluirTarefa)
  input_tarefa.value = ''
  input_tarefa.focus()

}
fechar.addEventListener('click',() => {
  editar.classList.toggle('ativo')
})
enviar.addEventListener('click',criarTarefa)


// criar a funcao que armazena as tarefas
