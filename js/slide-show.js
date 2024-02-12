// Use const para declarar variáveis que não serão reatribuídas
const radio = document.querySelector('.manual-btn');
const prev = document.querySelector('.slide-nav-previous');
const next = document.querySelector('.slide-nav-next');
let cont = 1;
const totalImg = 6;

// Checando e ativando o primeiro radio ao carregar a página
document.getElementById('radio1').checked = true;

// Use a função setInterval para realizar a troca automática de imagens
setInterval(proximaImg, 5000);

// Função para mudar a imagem
function proximaImg() {
    cont++;
    if (cont > totalImg) {
        cont = 1;
    }
    atualizarImg();
}

// Aplicar evento de click nos botões prev
prev.addEventListener('click', () => {
    cont = (cont > 1) ? cont - 1 : totalImg;
    atualizarImg();
    console.log('Cliquei em Prev');
});

// Aplicar evento de click nos botões next
next.addEventListener('click', () => {
    cont = (cont < totalImg) ? cont + 1 : 1;
    atualizarImg();
    console.log('Cliquei em Next');
});

// Função para atualizar a exibição da imagem com base no índice
function atualizarImg() {
    document.getElementById('radio' + cont).checked = true;
}


