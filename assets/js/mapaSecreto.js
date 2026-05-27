document.addEventListener("DOMContentLoaded", () => {

  const mapa =
    document.getElementById("mapa");

  if (!mapa) return;

  const pins =
    document.querySelectorAll(".pin");

  const panelTitle =
    document.getElementById("panel-title");

  const panelContent =
    document.getElementById("panel-content");


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

        <a
          href="guardados.html"
          class="panel-link"
        >
          Ver más
        </a>
      `;

    });

  });

});