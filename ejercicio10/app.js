// 3. Selección del contenedor de la galería desde el DOM
const galeriaContainer = document.querySelector("#galeria-container");

// 1. Creación de una función async que se ejecutará al cargar la página
async function cargarGaleria() {
    try {
        // 2. Uso de fetch para obtener la lista de 12 fotos de la API
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=12");

        if (!response.ok) {
            throw new Error("No se pudo obtener la información de las fotos.");
        }

        // Conversión de la respuesta a formato JSON (array de objetos)
        const fotos = await response.json();

        // 4. Uso de .forEach() para iterar sobre el array recibido
        fotos.forEach(foto => {
            // 5. Creación dinámica de un elemento <img> en JavaScript
            const imgElement = document.createElement("img");

            // 6. Establecimiento de la propiedad src con thumbnailUrl
            imgElement.src = foto.thumbnailUrl;

            // 7. Establecimiento de la propiedad alt con title
            imgElement.alt = foto.title;

            // 8. El reto: Añadir un addEventListener de tipo 'click' a cada imagen
            imgElement.addEventListener("click", () => {
                alert(`Título de la foto: ${foto.title}`);
            });

            // 9. Uso de appendChild() para añadir cada imagen al contenedor de la galería
            galeriaContainer.appendChild(imgElement);
        });

    } catch (error) {
        console.error("Hubo un error al cargar la galería:", error);
        galeriaContainer.innerHTML = "<p>Ocurrió un error al cargar las imágenes.</p>";
    }
}

// Ejecución de la función al cargar el script o la página
cargarGaleria();