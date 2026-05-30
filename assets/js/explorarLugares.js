// Datos hardcodeados para testear con propiedades de zona y temática
const lugares = [
    {
        nombre: 'Plaza Mayor',
        direccion: 'Calle Principal 123, Centro',
        zona: 'Centro',
        tematica: ['Histórico', 'Paisaje'],
        imagenes: 'https://via.placeholder.com/300x200?text=Plaza+Mayor',
        reseña: 'Hermosa plaza histórica con monumentos icónicos'
    },
    {
        nombre: 'Parque Central',
        direccion: 'Avenida Verde 456, Zona Norte',
        zona: 'Zona Norte',
        tematica: ['Al aire libre', 'Paisaje'],
        imagenes: 'https://via.placeholder.com/300x200?text=Parque+Central',
        reseña: 'Amplio espacio verde perfecto para paseos familiares'
    },
    {
        nombre: 'Mercado Tradicional',
        direccion: 'Calle Comercio 789, Barrio Antiguo',
        zona: 'Barrio Antiguo',
        tematica: ['Gastronomía', 'Histórico'],
        imagenes: 'https://via.placeholder.com/300x200?text=Mercado',
        reseña: 'Mercado tradicional con artesanías y productos locales'
    },
    {
        nombre: 'Librería del Viajero',
        direccion: 'Calle Libertad 234, Centro',
        zona: 'Centro',
        tematica: ['Librería', 'Café'],
        imagenes: 'https://via.placeholder.com/300x200?text=Libreria',
        reseña: 'Librería acogedora con café y rincones para leer'
    },
    {
        nombre: 'Café Retro',
        direccion: 'Avenida Nostalgia 567, Zona Este',
        zona: 'Zona Este',
        tematica: ['Café', 'Merienda', 'Histórico'],
        imagenes: 'https://via.placeholder.com/300x200?text=Cafe+Retro',
        reseña: 'Café vintage con ambiente relajado y buena música'
    },
    {
        nombre: 'Mirador del Cerro',
        direccion: 'Camino Alto 890, Zona Oeste',
        zona: 'Zona Oeste',
        tematica: ['Al aire libre', 'Paisaje'],
        imagenes: 'https://via.placeholder.com/300x200?text=Mirador',
        reseña: 'Lugar con vistas espectaculares al atardecer'
    },
    {
        nombre: 'Pastelería La Merienda',
        direccion: 'Calle Dulce 345, Centro',
        zona: 'Centro',
        tematica: ['Merienda', 'Gastronomía'],
        imagenes: 'https://via.placeholder.com/300x200?text=Pasteleria',
        reseña: 'Pastelería artesanal con las mejores meriendas de la ciudad'
    },
    {
        nombre: 'El Ateneo',
        direccion: 'Florida 340 , Centro',
        zona: 'Centro',
        tematica: ['Librería', 'Café'],
        imagenes: '../assets/img/ateneo.png',
        reseña: 'Símbolo emblemático de la cultura argentina desde 1912'
    }
];

// Las funciones obtenerLugaresGuardados y eliminarDeFavoritos
// se cargan desde guardados.js

// Función para guardar un lugar en localStorage
function guardarLugar(lugar) {
    const lugaresGuardados = obtenerLugaresGuardados();
    // Verificar si el lugar ya está guardado
    const existe = lugaresGuardados.some(l => l.nombre === lugar.nombre);
    if (!existe) {
        lugaresGuardados.push(lugar);
        localStorage.setItem('lugaresGuardados', JSON.stringify(lugaresGuardados));
    }
}

// Función para verificar si un lugar está guardado
function estaGuardado(nombreLugar) {
    const lugaresGuardados = obtenerLugaresGuardados();
    return lugaresGuardados.some(l => l.nombre === nombreLugar);
}

// Función para renderizar las cards
function renderizarLugares(listadoLugares = lugares) {
    const container = document.querySelector('.lugares-container');
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Validar si hay lugares para mostrar
    if (listadoLugares.length === 0) {
        container.innerHTML = '<p class="sin-resultados">No se encontraron lugares que coincidan con tus criterios de búsqueda.</p>';
        return;
    }
    
    // Crear una card por cada lugar
    listadoLugares.forEach(lugar => {
        const card = document.createElement('article');
        card.className = 'lugar-card';
        const tematicaTexto = lugar.tematica.join(', ');
        
        // Determinar el estado del botón
        const guardado = estaGuardado(lugar.nombre);
        const textoBoton = guardado ? 'Eliminar' : 'Guardar';
        const claseBoton = guardado ? 'guardar-btn eliminado' : 'guardar-btn';
        
        card.innerHTML = `
            <figure class="lugar-imagen">
                <img src="${lugar.imagenes}" alt="${lugar.nombre}" class="imagen">
            </figure>
            <header>
                <h3 class="nombre">${lugar.nombre}</h3>
            </header>
            <section class="lugar-info">
                <address class="direccion">${lugar.direccion}</address>
                <p class="zona"><strong>Zona:</strong> ${lugar.zona}</p>
                <p class="tematica"><strong>Temática:</strong> ${tematicaTexto}</p>
                <blockquote class="resena">${lugar.reseña}</blockquote>
            </section>
            <section class="card-actions">
                <button class="${claseBoton}" data-nombre="${lugar.nombre}" aria-label="${textoBoton} lugar">${textoBoton}</button>
            </section>
        `;
        container.appendChild(card);
    });
    
    // Agregar event listeners a los botones
    agregarEventListenerBotones();
}

// Función para agregar event listeners a los botones de guardar/eliminar
function agregarEventListenerBotones() {
    const botones = document.querySelectorAll('.guardar-btn');
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const nombreLugar = e.target.dataset.nombre;
            const lugar = lugares.find(l => l.nombre === nombreLugar);
            
            if (estaGuardado(nombreLugar)) {
                // Si está guardado, lo eliminamos
                eliminarLugar(nombreLugar);
            } else {
                // Si no está guardado, lo guardamos
                guardarLugar(lugar);
            }
            
            // Actualizar el estado visual del botón
            actualizarBoton(e.target, nombreLugar);
        });
    });DeFavoritos
}

// Función para actualizar el estado visual del botón
function actualizarBoton(boton, nombreLugar) {
    const guardado = estaGuardado(nombreLugar);
    const textoBoton = guardado ? 'Eliminar' : 'Guardar';
    boton.textContent = textoBoton;
    boton.setAttribute('aria-label', textoBoton + ' lugar');
    
    if (guardado) {
        boton.classList.add('eliminado');
    } else {
        boton.classList.remove('eliminado');
    }
}

// Función para filtrar lugares por nombre
function filtrarPorNombre(nombre) {
    return lugares.filter(lugar =>
        lugar.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
}

// Función para filtrar lugares por zona
function filtrarPorZona(zona) {
    if (zona === '') return lugares;
    return lugares.filter(lugar => lugar.zona === zona);
}

// Función para filtrar lugares por temática
function filtrarPorTematica(tematicas) {
    if (tematicas.length === 0) return lugares;
    return lugares.filter(lugar =>
        lugar.tematica.some(t => tematicas.includes(t))
    );
}

// Función para aplicar todos los filtros
function aplicarFiltros() {
    const nombre = document.getElementById('inputNombre').value;
    const zona = document.getElementById('selectZona').value;
    
    // Obtener temática seleccionada (un solo radio button)
    const radioTematica = document.querySelector('input[name="tematica"]:checked');
    const tematica = radioTematica ? radioTematica.value : '';
    
    // Aplicar filtros
    let resultados = lugares;
    
    if (nombre) {
        resultados = resultados.filter(lugar =>
            lugar.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    }
    
    if (zona) {
        resultados = resultados.filter(lugar => lugar.zona === zona);
    }
    
    if (tematica) {
        resultados = resultados.filter(lugar =>
            lugar.tematica.includes(tematica)
        );
    }
    
    renderizarLugares(resultados);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar lugares inicialmente
    renderizarLugares();
    
    // Agregar event listeners a los filtros
    const inputNombre = document.getElementById('inputNombre');
    const selectZona = document.getElementById('selectZona');
    const radiosTematica = document.querySelectorAll('input[name="tematica"]');
    const formulario = document.querySelector('.filtros-busqueda');
    
    // Escuchar cambios en el input de nombre
    inputNombre.addEventListener('input', aplicarFiltros);
    
    // Escuchar cambios en el select de zona
    selectZona.addEventListener('change', aplicarFiltros);
    
    // Escuchar cambios en los radio buttons de temática
    radiosTematica.forEach(radio => {
        radio.addEventListener('change', aplicarFiltros);
    });
    
    // Escuchar el botón de limpiar filtros
    formulario.addEventListener('reset', () => {
        // Esperar a que se limpien los campos
        setTimeout(() => {
            aplicarFiltros();
            agregarEventListenerBotones();
        }, 0);
    });
});