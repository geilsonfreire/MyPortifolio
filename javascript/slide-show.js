// Guardando classes em variáveis
var radio = document.querySelector('.manual-btn');
var cont = 1;

// Adicionando evento de verificação de clique
document.getElementById('radio1').checkVisibility = true;

// Função para verificar qual radio está selecionado    
setInterval(() => {
    proximoImg();
}, 5000)

// Função para selecionar os radios
function proximoImg() {
    cont++;
    if (cont > 6) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}