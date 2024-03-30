const list = document.getElementById('todoLIst')
const bins = document.querySelectorAll('#bin')
const pens = document.querySelectorAll('#pen')



pens.forEach(pen => {
  pen.addEventListener('click',()=> {
    let paiElement = pen.parentElement
    console.log(paiElement.textContent)
  })
})
bins.forEach(bin => {
  bin.addEventListener('click',()=> {
    let paiElement = bin.parentElement
    paiElement.remove()
  })
})

// script ja esta pegando o evento de excluir e editar,
// falta a parte de editar , fazer uma nova janela para  editar a tarefa
// falta colocar um checkout de tarefa realizada
