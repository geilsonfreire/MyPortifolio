//Declaração de variáveis
let btnAbrirMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let fecharMenu = document.getElementById('fechar-menu')

//Declaração de funções
btnAbrirMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})//Aplicando evento no btão para abrir menu mobile

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})//Aplicando evento no btão para fechar menu mobile