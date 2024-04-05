const fechar = document.querySelector('.fechar')
const btn = document.querySelector('.btn')
const editar = document.querySelector('.editar')
const input_tarefa = document.querySelector('.input_tarefa')
const enviar = document.querySelector('.enviar')
const todoList = document.getElementById('todoList')
let verifica = false

function reEditar() {
  const editando = document.querySelector('.editando');
  const taskId = editando.getAttribute('data-task-id'); // Obtém o ID da tarefa a ser editada
  const li = document.querySelector(`#todoList li[data-task-id="${taskId}"]`); // Seleciona o LI correto usando o ID
  const p = li.querySelector('p');
  const tarefa = editando.value;
  p.textContent = tarefa; 

  editar.classList.remove('ativo');
}

function editarTarefa(e){
  if(!verifica){
    const editando = document.getElementById('editando')
    const div = e.target.parentNode;
    const li = div.parentNode;
    const p = li.querySelector('p');
    const textoTarefa = p.textContent;
    editando.value = textoTarefa;
    
    editar.classList.add('ativo')
    editando.focus()
  
    editando.setAttribute('data-task-id', li.dataset.taskId);
  }
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
  const div2 = document.createElement('div')
  const input = document.createElement('input')
  
  input.type = 'checkbox'
  input.classList.add('check')

  input.addEventListener('change', function(event){
    if(event.target.checked){
      verifica = true
       p.classList.add('feito')
    } else {
      verifica = false
      p.classList.remove('feito')
    }
});
  
  const taskId = Date.now();

  li.setAttribute('data-task-id', taskId);

  p.textContent = tarefa

  const spanPen = document.createElement('span')
  spanPen.classList.add('icon-pen')
  const spanBin = document.createElement('span')
  spanBin.classList.add('icon-bin')
  div2.classList.add('div2')
  
  div.appendChild(spanBin)
  div.appendChild(spanPen)
  div2.appendChild(input)
  div2.appendChild(p)

  
  li.appendChild(div2)
  li.appendChild(div)
  
  todoList.appendChild(li)
  
  spanPen.addEventListener('click', editarTarefa)
  spanBin.addEventListener('click',excluirTarefa)
  input_tarefa.value = ''
  input_tarefa.focus()

}
fechar.addEventListener('click',() => {
  editar.classList.toggle('ativo')
})
enviar.addEventListener('click',criarTarefa)

btn.addEventListener('click',reEditar)
 

// criar a funcao que armazena as tarefas
