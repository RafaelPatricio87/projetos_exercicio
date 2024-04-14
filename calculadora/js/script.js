const btns = document.querySelectorAll('[id*=tecla]');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent)
    // so para testar se pega todos os btns
  })
})