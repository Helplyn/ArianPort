document.addEventListener("DOMContentLoaded", function () {
    var htmlButton = document.getElementById("boton1");

    htmlButton.addEventListener("click", function () {
        Swal.fire({
            text: 'Llevo 5 años en el mundo de la programacion web, y todo comenzo con un pequeño bloc de notas que tenia en mi escritorio',
            confirmButtonText: '¡Entendido!'
        });
    });
});
