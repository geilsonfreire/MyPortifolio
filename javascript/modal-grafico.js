// Aplicando função de exibir/ocultar modal
function showHideModal(modalId, show) {
    var modal = document.getElementById(modalId);

    if (show) {
        // Exibe o modal
        modal.style.display = 'block';
    } else {
        // Oculta o modal
        modal.style.display = 'none';
    }
}
