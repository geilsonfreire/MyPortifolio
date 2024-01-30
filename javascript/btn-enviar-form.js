document.getElementById("campo1").addEventListener("input", verificarCampos);
document.getElementById("campo2").addEventListener("input", verificarCampos);
document.getElementById("campo3").addEventListener("input", verificarCampos);
document.getElementById("campo4").addEventListener("input", verificarCampos);

function verificarCampos() {
  var campo1 = document.getElementById("campo1").value.trim();
  var campo2 = document.getElementById("campo2").value.trim();
  var campo3 = document.getElementById("campo3").value.trim();
  var campo4 = document.getElementById("campo4").value.trim();

  var todosCamposPreenchidos = campo1 !== "" && campo2 !== "" && campo3 !== "" && campo4 !== "";
  var botao = document.getElementById("meuBotao");
  botao.disabled = !todosCamposPreenchidos;
}

function enviar() {
  var botao = document.getElementById("meuBotao");

  if (!botao.disabled) { // Verifica se o botão está habilitado antes de enviar
    // Adiciona classe para aplicar o efeito visual
    botao.classList.add("enviado");

    // Muda o texto dentro do botão
    botao.innerHTML = "Enviando...";

    // Simula um atraso para mostrar o efeito
    setTimeout(function() {
      // Aqui você pode adicionar lógica adicional, como enviar dados para o servidor

      // Reset do botão após o envio (volta ao estado inicial)
      botao.classList.remove("enviado");
      botao.innerHTML = "Enviar";
      // Resetar o formulário ou realizar outras ações após o envio
      document.getElementById("meuFormulario").reset();
      // Desabilitar o botão após o envio, se necessário
      botao.disabled = true;
    }, 2000); // Tempo de simulação em milissegundos (2 segundos neste exemplo)
  }
}
