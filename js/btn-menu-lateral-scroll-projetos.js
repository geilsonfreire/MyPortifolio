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

    // Adiciona o evento de clique a cada link do menu
    menuLinks.forEach(link => link.addEventListener('click', highlightMenuItem));

});