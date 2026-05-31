document.addEventListener("DOMContentLoaded", () => {

  const mapa =
    document.getElementById("mapa");

  if (!mapa) return;

  const pins = document.querySelectorAll(".pin");
  const panelTitle = document.getElementById("panel-title");
  const panelContent = document.getElementById("panel-content");

  let listaLugares = [];
  
  fetch("../assets/data/lugares.json")
    .then(response => response.json())
    .then(data => {
      listaLugares = data;
      console.log("Lugares cargados correctamente en el mapa:", listaLugares.length);
    })
    .catch(error => console.error("Error al cargar el JSON en el mapa:", error));
  

  let mouseX = 0;
  let mouseY = 0;

  let frame = null;

  mapa.addEventListener("mousemove", (event) => {

    const rect =
      mapa.getBoundingClientRect();

    mouseX =
      event.clientX - rect.left;

    mouseY =
      event.clientY - rect.top;

    if (!frame) {

      frame =
        window.requestAnimationFrame(updateLight);

    }

  });

  function updateLight() {

    mapa.style.setProperty(
      "--mouse-x",
      `${mouseX}px`
    );

    mapa.style.setProperty(
      "--mouse-y",
      `${mouseY}px`
    );

    frame = null;
  }


  pins.forEach((pin) => {

    pin.addEventListener("click", () => {

      const title =
        pin.dataset.title;

      const description =
        pin.dataset.description;

      panelTitle.textContent =
        title;

      panelContent.innerHTML = `
        <p>${description}</p>
        <button class="panel-link" id="btn-ver-mas-detalle">
          Ver más
        </button>
      `;
      const btnVerMas = document.getElementById("btn-ver-mas-detalle");
      if (btnVerMas) {
              btnVerMas.addEventListener("click", (e) => {
                const lugarEncontrado = listaLugares.find(l => l.nombre.toLowerCase() === title.toLowerCase());

                if (lugarEncontrado) {
                  localStorage.setItem("lugarSeleccionado", JSON.stringify(lugarEncontrado));
                }else {

                const objetoAuxiliar = {
                  nombre: title,
                  direccion: description,
                  zona: "Desconocida",
                  tematica: ["General"],
                  imagenes: "../assets/img/default.png",
                  resena: description
                };
                localStorage.setItem("lugarSeleccionado", JSON.stringify(objetoAuxiliar));
              }
                window.location.href = "detalle.html";
              });
            }

    });

  });

}); 