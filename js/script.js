document.addEventListener("DOMContentLoaded", () => {

    // Animación de entrada de tarjetas
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });


    // Menú lateral activo
    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {

            menuItems.forEach(i => i.classList.remove("active"));

            item.classList.add("active");
        });
    });


    // Confirmación al eliminar
    const deleteButtons = document.querySelectorAll(".btn-delete");

    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function(e) {

            const confirmacion = confirm("¿Seguro que deseas eliminar este producto?");

            if (!confirmacion) {
                e.preventDefault();
            }

        });
    });


    // Buscador de productos
    const searchInput = document.getElementById("buscarProducto");

    if (searchInput) {

        searchInput.addEventListener("keyup", function() {

            let filtro = searchInput.value.toLowerCase();

            let filas = document.querySelectorAll("tbody tr");

            filas.forEach(fila => {

                let texto = fila.textContent.toLowerCase();

                fila.style.display = texto.includes(filtro) ? "" : "none";

            });

        });

    }

});

import ProductoController from "./controllers/productoController.js";

const controller = new ProductoController();

document.addEventListener("DOMContentLoaded", () => {
    controller.iniciar();
});

// BOTÓN DE PRUEBA
document.addEventListener("click", (e) => {
    if(e.target.id === "btnAgregar"){
        controller.agregarProducto();
    }
});