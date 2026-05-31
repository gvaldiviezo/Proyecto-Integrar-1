document.addEventListener("DOMContentLoaded", () => {
    
    const datosGuardados = localStorage.getItem("lugarSeleccionado");

    if (!datosGuardados) {
        console.warn("No se encontró ningún lugar en el localStorage.");
        return;
    }

    const lugar = JSON.parse(datosGuardados);

    if (lugar) {

        const nombreHTML = document.getElementById("detalle-nombre");
        if (nombreHTML) {
            nombreHTML.textContent = lugar.nombre;
        }
        const zonaHTML = document.getElementById("detalle-zona");
        if (zonaHTML) {
            zonaHTML.textContent = lugar.zona;
        }

        const tematicaHTML = document.getElementById("detalle-tematica");
        if (tematicaHTML) {
            tematicaHTML.textContent = Array.isArray(lugar.tematica) 
                ? lugar.tematica.join(", ") 
                : lugar.tematica;
        }

        const direccionHTML = document.getElementById("detalle-direccion");
        if (direccionHTML) {
            direccionHTML.textContent = lugar.direccion;
        }

        const argumentoHTML = document.getElementById("detalle-argumento");
        if (argumentoHTML) {
            argumentoHTML.textContent = lugar.reseña;
        }

        const imgHTML = document.getElementById("detalle-img");
        if (imgHTML) {
            imgHTML.src = lugar.imagenes;
            imgHTML.alt = `Fotografía de ${lugar.nombre}`;
        }
    }
});