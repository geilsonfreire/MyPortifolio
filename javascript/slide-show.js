// Use const para declarar variáveis que não serão reatribuídas
const radio = document.querySelector('.manual-btn');
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
    document.getElementById('radio' + cont).checked = true;
}
