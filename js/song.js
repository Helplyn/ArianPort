// Obtén el elemento de carátula
const caratula = document.getElementById("caratula");

// Obtén el elemento de audio personalizado
const reproductorAudio = document.getElementById("reproductor-audio");

// Agrega un evento clic a la carátula
caratula.addEventListener("click", () => {
    reproductorAudio.play(); // Inicia la reproducción al hacer clic en la carátula
});
