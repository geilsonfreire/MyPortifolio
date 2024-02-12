// Aplicando função de clone da skills e guardando em uma constante
var cloneSkills = document.querySelector(".slider-skills-box").cloneNode(true);
document.querySelector(".content-slide-box").appendChild(cloneSkills);

// Reiniciar a animação no elemento clonado
cloneSkills.style.animationPlayState = "running";

// Reiniciar a transição suave nas imagens clonadas
var clonedImages = cloneSkills.querySelectorAll(".slider-skills-img");
clonedImages.forEach(function(clonedImage) {
    clonedImage.style.transition = "transform 20s ease-in-out";
});