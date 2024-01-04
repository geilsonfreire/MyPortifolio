// Guardando os elementos em variáveis
var menuItem = document.querySelectorAll('.itens-menu');

// Função para selecionar o item do menu
function selectItemMenu() {
    // Removendo a classe active de todos os itens
    menuItem.forEach((item) => {
        item.classList.remove('ativo');
    });
    // Adicionando a classe active no item selecionado
    this.classList.add('ativo');
}

// Adicionando o evento de click em cada item do menu
menuItem.forEach((item) => {
    item.addEventListener('click', selectItemMenu);
});