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

    // Obtendo o ID da seção correspondente ao item clicado
    var sectionId = this.querySelector('a').getAttribute('href').substring(1);
    var section = document.getElementById(sectionId);

    // Escondendo todas as seções
    document.querySelectorAll('.txt_sobre').forEach((sec) => {
        sec.style.display = 'none';
    });

    // Mostrando a seção correspondente
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adicionando o evento de click em cada item do menu
menuItem.forEach((item) => {
    item.addEventListener('click', selectItemMenu);
});

