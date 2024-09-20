document.getElementById("verButton").onclick = function() {
    document.getElementById("animation").classList.remove("hidden");
    animateFlowers();
};

function animateFlowers() {
    const container = document.getElementById("animation");
    
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
        flower.style.bottom = 0; // Comienza desde abajo
        container.appendChild(flower);

        // Animación de las flores
        setTimeout(() => {
            flower.style.transition = "bottom 3s";
            flower.style.bottom = Math.random() * 100 + "vh"; // Altura aleatoria
        }, 10);

        // Remover la flor después de que termina la animación
        setTimeout(() => {
            flower.remove();
        }, 3100);
    }
}
