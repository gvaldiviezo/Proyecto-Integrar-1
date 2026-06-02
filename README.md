# 📍 Mapa Secreto de la Ciudad

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## 📝 Descripción
**Mapa Secreto de la Ciudad** es una guía interactiva y colaborativa diseñada para descubrir aquellos lugares poco conocidos o "escondidos" de la urbe: cafés ideales para estudiar, spots instagrameables para fotos, ferias locales, librerías boutique, murales artísticos y plazas ocultas. 
El objetivo es ofrecer una experiencia de exploración urbana alejada de los circuitos turísticos tradicionales, sumergiendo al usuario en una estética cyberpunk y nocturna.

---

## 👥 Integrantes - Grupo 14
* **Luz Milagros Mendoza Alcántara** * **Nicole Rodríguez** * **Gisele Micaela Valdiviezo** * **Luz María Vázquez Soto**

---

## 🚀 Tecnologías Utilizadas
El proyecto fue desarrollado utilizando tecnologías estáticas vanilla, priorizando el rendimiento, la accesibilidad y el diseño adaptativo sin depender de frameworks externos:
* **HTML5 Semántico:** Estructuración limpia utilizando etiquetas de contenido para mejorar el SEO y la accesibilidad.
* **CSS3 Avanzado:** Diseño visual propio implementando layouts con Flexbox y CSS Grid, uso de variables nativas, transiciones fluidas y diseño totalmente responsive.
* **JavaScript (Vanilla):** Manipulación dinámica del DOM, manejo de eventos en tiempo real, persistencia de datos local y optimización de rendimiento con `requestAnimationFrame`.

---

## 🕹️ Funcionalidades Principales
* **Mapa Secreto con Efecto Linterna:** Un mapa interactivo cyberpunk donde el usuario explora a oscuras utilizando el movimiento del mouse como una linterna para revelar pines ocultos.
* **Catálogo de Exploración Dinámico:** Renderizado automático de tarjetas de lugares desde un archivo JSON local con soporte de filtros por categorías y zonas.
* **Persistencia con LocalStorage:** Sistema funcional para guardar y remover lugares favoritos que persisten aun si se recarga el navegador.
* **Sección de Detalle Ampliada:** Vista exclusiva y centrada para cada lugar, donde se despliega de forma espaciosa la información, address y reseñas completas al presionar "Ver más".
* **Diseño Responsivo y Accesible:** Adaptación fluida para pantallas de escritorio (Mac/PC) y dispositivos móviles, incluyendo enlaces de salto semánticos.

---

## 🔗 Enlaces del Proyecto
* 📦 **Repositorio en GitHub:** [https://github.com/gvaldiviezo/Proyecto-Integrar-1.git](https://github.com/gvaldiviezo/Proyecto-Integrar-1.git)
* 🚀 **Sitio Web Funcional (Deploy):** [https://gvaldiviezo.github.io/Proyecto-Integrar-1/](https://gvaldiviezo.github.io/Proyecto-Integrar-1/)

---

## 📖 Instrucciones Básicas de Uso
1. **Explorar el Inicio:** Al ingresar (`index.html`), se presenta la propuesta visual de la ciudad y accesos directos a las zonas destacadas.
2. **Filtrar Spots:** En la sección "Explorar" (`explorar.html`), utilizá los botones superiores para filtrar los lugares por categoría (ej. "Cafés para estudiar") o escribí en el buscador.
3. **Explorar el Mapa Secreto:** En la sección "Mapa Secreto" (`mapaSecreto.html`), mové la linterna sobre la interfaz cyberpunk, hacé clic en los pines y presioná "Ver más" para abrir la ficha extendida.
4. **Guardar Favoritos:** Presioná el botón de guardar en cualquier lugar para añadirlo a tu lista. Podrás revisar y gestionar tu selección en la página de "Mis lugares guardados" (`guardados.html`).

---

## 📁 Estructura del Proyecto
El código se encuentra organizado de forma modular para garantizar la escalabilidad y claridad del desarrollo:

```text
├── index.html                  # Pantalla de bienvenida y presentación principal
├── pages/
│   ├── explorar.html           # Catálogo interactivo de lugares
│   ├── guardados.html          # Panel de favoritos gestionado por el usuario
│   ├── mapaSecreto.html        # Interfaz de exploración interactiva con linterna
│   └── detalle.html            # Vista ampliada y centrada del lugar seleccionado
├── assets/
│   ├── css/
│   │   ├── style.css           # Estilos unificados y variables de diseño globales
│   │   ├── explorar.css        # Layouts de grilla y espaciado de catálogo
│   │   ├── mapaSecreto.css     # Estilos de la linterna y posicionamiento de pines
│   │   └── detalle.css         # Centrado absoluto y diseño de tarjeta extendida
│   ├── js/
│   │   ├── main.js             # Controlador principal y utilidades globales
│   │   ├── guardados.js        # Gestión de lógica para añadir/remover favoritos
│   │   ├── mapaSecreto.js      # Lógica del fetch, requestAnimationFrame de linterna y guardado de estado
│   │   └── detalle.js          # Lector de LocalStorage e inyección dinámica en la card
│   ├── data/
│   │   └── lugares.json        # Base de datos local en formato JSON estricto
│   └── img/                    # Assets gráficos del proyecto
├── package.json                # Archivo de configuración generado por pnpm
└── README.md                   # Documentación técnica del proyecto