
document.addEventListener('DOMContentLoaded', () => {
    renderizarMisGuardados();
});

function obtenerLugaresGuardados() {
    const guardadosJSON = localStorage.getItem('lugaresGuardados');
    return guardadosJSON ? JSON.parse(guardadosJSON) : [];
}

function renderizarMisGuardados() {
    const contenedor = document.getElementById('contenedor-guardados'); 
    const lugares = obtenerLugaresGuardados();                         
    contenedor.innerHTML = '';

    if (lugares.length === 0) {
        document.getElementById('no-guardados').hidden = false;
        return;
    }
    document.getElementById('no-guardados').hidden = true;

    lugares.forEach(lugar => {
        const article = document.createElement('article');
        article.className = 'lugar-card';
        
        article.innerHTML = `
            <figure class="lugar-imagen">
                <img src="${lugar.imagenes}" alt="${lugar.nombre}" class="imagen">
            </figure>
            <header>
                <h3 class="nombre">${lugar.nombre}</h3>
            </header>
            <section class="lugar-info">
                <address class="direccion">${lugar.direccion}</address>
                <p class="zona"><strong>Zona:</strong> ${lugar.zona}</p>
                <blockquote class="resena">${lugar.reseña}</blockquote>
            </section>
            <section class="card-actions">
                <button 
                    class="guardar-btn eliminado" 
                    data-nombre="${lugar.nombre}"
                    aria-label="Quitar ${lugar.nombre} de guardados">
                    Eliminar
                </button>
            </section>
        `;

        article.querySelector('.guardar-btn').addEventListener('click', () => {
            eliminarDeFavoritos(lugar.nombre);
        });

        contenedor.appendChild(article);
    });
}

function eliminarDeFavoritos(nombreLugar) {
    let lugares = obtenerLugaresGuardados();
    lugares = lugares.filter(l => l.nombre !== nombreLugar);
    localStorage.setItem('lugaresGuardados', JSON.stringify(lugares));
    renderizarMisGuardados();
}
