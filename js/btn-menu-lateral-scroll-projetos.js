document.addEventListener('DOMContentLoaded', (event) => {

    // Seleciona todos os links do menu lateral
    let menuLinks = document.querySelectorAll('.menu-projeto a');

    // Função para destacar o item do menu selecionado e mostrar a seção correspondente
    function highlightMenuItem(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Remove a classe 'ative' de todos os itens do menu
        document.querySelectorAll('.itens-menu-projeto').forEach(item => item.classList.remove('ative'));

        // Esconde todas as seções
        document.querySelectorAll('.content-projet-geral').forEach(section => section.style.display = 'none');

        // Adiciona a classe 'ative' ao item do menu que contém o link clicado
        event.target.closest('.itens-menu-projeto').classList.add('ative');

        // Mostra a seção correspondente ao link clicado
        let sectionId = event.target.getAttribute('href').substring(1);
        let section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            section.style.display = 'block';
        }
    }

    // Seleciona todos os botões com a classe 'itens-menu-projeto'
    let menuButtons = document.querySelectorAll('.itens-menu-projeto button');

    // Função para mudar o ícone quando o mouse passa sobre o botão
    function changeIconOnHover(event) {
        let icon = event.target.querySelector('.bi-caret-right');
        if (icon) {
            icon.classList.remove('bi-caret-right');
            icon.classList.add('bi-caret-down');
        }
    }

    // Função para mudar o ícone de volta quando o mouse sai do botão
    function changeIconOnLeave(event) {
        let icon = event.target.querySelector('.bi-caret-down');
        if (icon) {
            icon.classList.remove('bi-caret-down');
            icon.classList.add('bi-caret-right');
        }
    }

    // Adiciona os ouvintes de evento a cada botão
    menuButtons.forEach(button => {
        button.addEventListener('mouseenter', changeIconOnHover);
        button.addEventListener('mouseleave', changeIconOnLeave);
    });


    // Adiciona o evento de clique a cada link do menu
    menuLinks.forEach(link => link.addEventListener('click', highlightMenuItem));

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
});