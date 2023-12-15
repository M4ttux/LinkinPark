document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar/ocultar las secciones de canciones
    function toggleCanciones(sectionId) {
        const section = document.getElementById(sectionId);

        if (section.style.display === "block") {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
    }

    // Agrega un event listener a cada botón para controlar las secciones
    const botones = document.querySelectorAll(".mostrar-canciones");

    botones.forEach((boton) => {
        boton.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");
            toggleCanciones(sectionId);
        });
    });
});

