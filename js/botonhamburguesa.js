/* function abrirHamburguesa() {
    var menu = document.getElementById("nav-botones");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

 */

function abrirHamburguesa() {
    var menu = document.getElementById("nav-botones");
    var windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        menu.style.display = "block";
    } else if (windowWidth < 480) {
        menu.style.display = "none";
    } else {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }
}

// También agregamos el evento de escucha para cambios en la resolución de la ventana
window.addEventListener('resize', function () {
    abrirHamburguesa();
});

// Llamamos a abrirHamburguesa al cargar la página para establecer el estado inicial
abrirHamburguesa();
