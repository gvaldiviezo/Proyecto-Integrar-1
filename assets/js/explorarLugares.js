// bucarlugares
// por tipo
// por zona
// por palabras claves 

// guardar lugares en favoritos
// usar local storage

// sugerencia por votacion/popularidad

// setear gnumero de guardados??
// podemos usar supabase para crear usuarios y perfiles??

// Datos hardcodeados para testear
// Fácil de cambiar a fetch de API o Google Maps después
const lugares = [
    {
        nombre: 'Plaza Mayor',
        direccion: 'Calle Principal 123, Centro',
        imagenes: 'https://via.placeholder.com/300x200?text=Plaza+Mayor',
        reseña: 'Hermosa plaza histórica con monumentos icónicos'
    },
    {
        nombre: 'Parque Central',
        direccion: 'Avenida Verde 456, Zona Norte',
        imagenes: 'https://via.placeholder.com/300x200?text=Parque+Central',
        reseña: 'Amplio espacio verde perfecto para paseos familiares'
    },
    {
        nombre: 'Mercado Tradicional',
        direccion: 'Calle Comercio 789, Barrio Antiguo',
        imagenes: 'https://via.placeholder.com/300x200?text=Mercado',
        reseña: 'Mercado tradicional con artesanías y productos locales'
    }
];

// Función para renderizar las cards
function renderizarLugares(listadoLugares = lugares) {
    const container = document.querySelector('.lugares-container');
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Crear una card por cada lugar
    listadoLugares.forEach(lugar => {
        const card = document.createElement('article');
        card.className = 'lugar-card';
        card.innerHTML = `
            <figure class="lugar-imagen">
                <img src="${lugar.imagenes}" alt="${lugar.nombre}" class="imagen">
            </figure>
            <header>
                <h3 class="nombre">${lugar.nombre}</h3>
            </header>
            <section class="lugar-info">
                <address class="direccion">${lugar.direccion}</address>
                <blockquote class="resena">${lugar.reseña}</blockquote>
            </section>
            <section class="card-actions">
                <button class="guardar-btn" aria-label="Guardar lugar">Guardar</button>
            </section>
        `;
        container.appendChild(card);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderizarLugares();
});