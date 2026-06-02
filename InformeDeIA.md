# INFORME DE DESARROLLO: INTEGRACIÓN DE INTELIGENCIA ARTIFICIAL
Primer Proyecto Integrador - Módulo de Web Estática
Documento: Evaluación de Uso de Herramientas de IA

## 1. ¿Qué herramientas de IA utilizaron?
Para el desarrollo de esta wb estatica, cada herramienta fue utilizada como asistente de programación, análisis y generación de ideas: Antigravity, Gemini, Chat GPT, Claude Sonnet 4.5, Claude Haiku 4.5, Codex. Y tambien para recibir orientación sobre buenas prácticas de accesibilidad web y obtener retroalimentación sobre las especificaciones técnicas del proyecto.

## 2. ¿Para qué las utilizaron?
Las usamos principalmente como un soporte técnico. Nos sirvieron para resolver dudas puntuales de JavaScript cuando nos trabábamos con la lógica o especificamente para consultar dudas sobre estilos. Tambien para generar ejemplos de lugares para la aplicación, implementar funciones de filtrado y crear la lógica de guardado con LocalStorage.

## 3. ¿Qué partes del proyecto fueron asistidas por IA?
* La primera parte asistida en su gran mayoria por IA, fue el filtrado en base al json de la busqueda general en la seccion de Inicio, o sea, el *if (lugar.nombre.toLowerCase().includes(query)) {encontrado = lugar;*
* Otra de las partes asistidas, fue para la base de los estilos del proyecto y como asistencia para realizar el efecto linterna del mapa secreto en el código de js.
* **Seccion Explorar Lugares**: Diseño de la estructura JSON de los lugares, generación de datos de ejemplo, desarrollo de los filtros por nombre, zona y temática, implementación del sistema de renderizado dinámico, desarrollo de la persistencia de datos mediante LocalStorage, manejo de eventos y actualización de la interfaz, optimización y refactorización de funciones, resolución de errores durante el desarrollo.
* **Seccion Mis Guardados**: Se aplico IA en guardados.html para el uso correcto de atributos de accesibilidad (*role, aria-label, aria-live, aria-current*), en el CSS corrección del archivo guardados.css asegurando el cumplimiento de los requisitos de animaciones y transiciones, así como modelo de cajas y por último en JavaScript para la validación de la lógica guardados.js para la lectura de localStorage y la integración con el código de explorar.js.

## 4. ¿Qué prompts o consultas les resultaron más útiles?
Lo que mejor nos funcionó fue adoptar una estrategia cruzada entre distintas herramientas: primero le pedíamos a una IA que nos diseñara o perfeccionara un prompt específico, y luego utilizábamos esa estructura optimizada en otra IA para obtener el resultado final. Esta dinámica de "pedirle un prompt a una IA para usarlo en otra" nos permitió conseguir respuestas muchísimo más precisas, detalladas y alineadas con lo que necesitábamos.
* **Seccion Explorar Lugares**: algunos ejemplos fueron:
- Genera una estructura JSON para una aplicación de lugares secretos de la ciudad.
- Genera una función que utilice el json a través de una función asíncrona.
* **Seccion Mis Guardados**: la consulta sobre la integración entre guardados.js y explorarLugares.js a través de localStorage, que permitió definir el contrato de datos compartido entre ambas páginas. El prompt que se utilizo fue el siguiente: *Compartí el código completo de explorarLugares.js para analizar la estructura de datos utilizada en localStorage y determinar cómo debía leerlos guardados.js para mantener compatibilidad entre ambos archivos*.

## 5. ¿Qué respuestas de la IA tuvieron que corregir?
* En la seccion del Inicio, tuve que corregir el filtrado para la busqueda, ya que como nos basamos en un **json**, el codigo que me sugeria la IA (Antigravity) era el filtrado por cada item del lugar, es decir, *${encontrado.nombre}"</strong> en la zona <strong>${encontrado.zona}</strong>.<br>📍 Dirección: ${encontrado.direccion}*, y la verdad que no se me hacia un codigo limpio, por lo que decidi que el filtrado solo sea por nombre y que encuentre la coincidencia solo por esa variable.
* Fue necesario corregir ademas:
- Nombres de variables que no coincidían con la estructura real del proyecto.
- Selectores del DOM que no existían en nuestro HTML.
- Algunas sugerencias de estilos CSS que no se ajustaban al diseño elegido.
- Fragmentos de código que requerían adaptación para funcionar con nuestra arquitectura.
- Direcciones, imágenes y path de las mismas 

## 6. ¿Qué problemas tuvieron al trabajar con IA?
* **Seccion Inicio**: El principal problema fue que la IA nos ofrecio una solucion demasiado compleja que no se adaptaba a lo que buscabamos. Al pedirle ayuda con la barra de busqueda, nos sugeria usar comandos como *window.location.href* para redirigir al usuario a otra pagina, en lugar de resolver el filtrado de forma simple dentro del mismo Inicio. Ademas, nos generaba lineas de codigo muy largas para recorrer el JSON (mostrando nombre, zona, dirección, etc.), lo cual nos resulto dificil de entender al principio y hacia que el codigo no quede limpio.
Otros principales problemas fueron:
- Algunas respuestas asumían una estructura diferente a la del proyecto.
- En ocasiones generaba código redundante o poco optimizado.
- A veces proponía funciones que no contemplaban todos los casos de uso.
- Fue necesario verificar constantemente el funcionamiento real del código.
Otro principal desafío fue la falta de especificidad en las consultas iniciales. Al no proporcionar desde el principio el contexto completo del proyecto la IA generó respuestas genéricas que no se adaptaban al trabajo grupal.


## 7. ¿Qué aprendieron durante el proceso?
Aprendimos que la IA es una herramienta excelente para dar el primer paso cuando no sabse como arrancar un codigo, pero que no se puede copiar y pegar a ciegas, siempre hay que revisar lo que te devuelve y entender que hace cada linea, a trabajar con LocalStorage para persistir datos, a organizar mejor el código separando responsabilidades, a formular prompts más precisos para obtener mejores respuestas.
Ademas apendimos las buenas practicas de trabajo colaborativo con Git, incluyendo el uso de ramas, commits convencionales para integrar cambios sin afectar el trabajo de otros integrantes.

## 8. ¿Qué partes del código puede explicar cada integrante?
* **Luz Mendoza Alcantara**: puede explicar la parte de Inicio y la funcionalidad de la barra de busqueda general; 
* **Gisele Micaela Valdiviezo**: puede explicar la página de **Mapa Secreto** y los detalles de cada card;
* **Luz María Vázquez Soto**: la estructura de datos utilizada en la aplicación, el funcionamiento de los filtros, el renderizado dinámico de tarjetas, la lógica de LocalStorage.
* **Nicole Rodríguez**: puede explicar la estructura semántica de la página con etiquetas <header>, <main>, <section> y <footer>, implementación del skip link para accesibilidad por teclado, gestión del estado vacío mediante la sección #no-guardados, uso de variables CSS heredadas del archivo global style.css, transiciones y animación fadeIn para la entrada de las cards y el selector de atributo [hidden] para garantizar la accesibilidad del estado vacío.

## 9. ¿Qué decisiones tomó el grupo sin depender de la IA?
Como grupo nos encargamos de toda la organizacion del proyecto. Sin usar la IA, decidimos como dividirnos las tareas para trabajar mejor, aportamos las ideas principales para armar el contenido y nos consultamos constantemente entre todas para debatir y aprobar cada cambio que haciamos. 
Tambien la temática del proyecto ("Mapa Secreto de la Ciudad"), la selección de las categorías y zonas utilizadas, el diseño visual de la interfaz, la organización de carpetas y archivos, la experiencia de usuario y navegación, la selección de los lugares incluidos en la aplicación.
Ademas se decidió el flujo de trabajo que se sugirió trabajar en ramas individuales por integrantes y fusionar los cambios al final.

## 10. ¿Hubo código sugerido por IA que descartaron? ¿Por qué?
- Si, en la parte de inicio, descarte por completo el codigo sugerido por Antigravity en cuanto a la redireccion a la seccion de **Explorar Lugares** cuando se iniciaba una busqueda en la barra general porque no entendia la logica de *window.location.href =* y a su vez, si la utilizaba no sabria como explicarla. 
- En la parte de Explorar, se descartaron algunas sugerencias porque:
* Agregaban complejidad innecesaria para los requerimientos del proyecto.
* Utilizaban técnicas avanzadas que dificultaban la comprensión del código.
* No se integraban correctamente con la estructura existente.
* Generaban funcionalidades que no estaban contempladas en el alcance del trabajo.
Por lo que se priorizó mantener un código simple, entendible y fácil de mantener por todos los integrantes del grupo.
