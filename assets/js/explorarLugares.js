// Variable para almacenar lugares cargados desde JSON
let lugares = [];

// Cargar lugares desde el archivo JSON
async function cargarLugares() {
    try {
        const response = await fetch('../assets/data/lugares.json');
        if (!response.ok) {
            throw new Error(`Error al cargar lugares.json: ${response.status}`);
        }
        lugares = await response.json();
        console.log('Lugares cargados:', lugares.length);
        return true;
    } catch (error) {
        console.error('Error cargando lugares:', error);
        // Mostrar mensaje de error
        const container = document.querySelector('.lugares-container');
        if (container) {
            container.innerHTML = '<p class="sin-resultados">Error al cargar los lugares. Intenta recargar la página.</p>';
        }
        return false;
    }
}

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
                eliminarDeFavoritos(nombreLugar);
            } else {
                // Si no está guardado, lo guardamos
                guardarLugar(lugar);
            }
            
            // Actualizar el estado visual del botón
            actualizarBoton(e.target, nombreLugar);
        });
    });
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
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar lugares desde JSON
    const cargados = await cargarLugares();
    
    if (!cargados) {
        console.error('No se pudieron cargar los lugares');
        return;
    }
    
    // Renderizar lugares inicialmente
    renderizarLugares();
    
    // Agregar event listeners a los filtros
    const inputNombre = document.getElementById('inputNombre');
    const selectZona = document.getElementById('selectZona');
    const radiosTematica = document.querySelectorAll('input[name="tematica"]');
    const formulario = document.querySelector('.filtros-busqueda');
    
    if (!inputNombre || !selectZona || !formulario) {
        console.error('No se encontraron los elementos del formulario');
        return;
    }
    
    // Escuchar cambios en el input de nombre
    inputNombre.addEventListener('input', () => {
        console.log('Filtro por nombre');
        aplicarFiltros();
    });
    
    // Escuchar cambios en el select de zona
    selectZona.addEventListener('change', () => {
        console.log('Filtro por zona');
        aplicarFiltros();
    });
    
    // Escuchar cambios en los radio buttons de temática
    radiosTematica.forEach(radio => {
        radio.addEventListener('change', () => {
            console.log('Filtro por temática');
            aplicarFiltros();
        });
    });
    
    // Escuchar el botón de limpiar filtros
    formulario.addEventListener('reset', () => {
        // Esperar a que se limpien los campos
        setTimeout(() => {
            console.log('Filtros limpiados');
            aplicarFiltros();
            agregarEventListenerBotones();
        }, 0);
    });
});