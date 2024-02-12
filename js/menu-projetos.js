// Selecionando todos os itens do menu com classe "itens-menu-projeto"
const itensMenu = document.querySelectorAll('.itens-menu-projeto');

// Iterando sobre cada item do menu para adicionar os eventos
itensMenu.forEach(item => {
    const sublist = item.querySelector('.sublist');

    // Adicionando evento de passar o mouse
    item.addEventListener('mouseenter', () => {
        // Mostrando a sublist do item
        sublist.style.display = 'block';
    });

    // Adicionando evento de remover o mouse
    item.addEventListener('mouseleave', () => {
        // Escondendo a sublist do item
        sublist.style.display = 'none';
    });
});