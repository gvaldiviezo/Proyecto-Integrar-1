document.addEventListener('DOMContentLoaded', () =>{
    const $form = document.getElementById("general-search-form");
    const search = document.getElementById("form-search");
    const message = document.getElementById("search-message");

    if ($form && search){
        $form.addEventListener("submit", (event)=> {
            event.preventDefault();

            if (query !== "") {
                message.style.display = "block"; 
                message.textContent = "🔍 Buscando...";

                fetch('./assets/data/lugares.json')
                    .then(response => response.json())
                    .then(lugares => {
                        let encontrado = null;
                        
                        for (let i = 0; i < lugares.length; i++) {
                            const lugar = lugares[i];

                            if (lugar.nombre.toLowerCase().includes(query)) {
                                encontrado = lugar;
                                break; 
                            }
                        }
                        if (encontrado !== null) {
                            message.innerHTML = `📍 ¡Encontrado! <strong>"${encontrado.nombre}"</strong>.<br>✨ Podés ver todos los detalles en "Explorar Lugares".`;
                        } else {
                            message.textContent = `🔍 Buscando lugares relacionados con: "${query}"... ¡Pronto tendremos novedades!`;
                        }
                    })
                    .catch(error => {
                        console.error("Error al buscar:", error);
                        message.textContent = "❌ Error al cargar los lugares.";
            });
            }
        });
        search.addEventListener("input", () => {
            if (search.value.trim() === "") {
                message.style.display = "none";
                message.innerHTML = "";
            }
        });
    }
});

