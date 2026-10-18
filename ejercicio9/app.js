// 2. Selección de elementos del DOM
const searchForm = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username-input");
const resultadoContainer = document.querySelector("#resultado");

// Añadir el escuchador de eventos al formulario para el evento 'submit'
searchForm.addEventListener("submit", (event) => {
    // Evita que la página se recargue por defecto
    event.preventDefault();

    // Obtiene el valor del input eliminando espacios en blanco sobrantes
    const username = usernameInput.value.trim();

    if (username) {
        buscarUsuario(username);
    }
});

// 3. Función asíncrona para buscar el usuario en la API
async function buscarUsuario(username) {
    // Muestra un estado de carga previo
    resultadoContainer.innerHTML = "<p>Buscando usuario...</p>";

    // 6. Envuelve la lógica de fetch en un bloque try...catch para manejar errores
    try {
        // 4. Petición fetch a la API pública filtrando por el parámetro username
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        // Verifica si la respuesta HTTP es correcta
        if (!response.ok) {
            throw new Error("Error en la conexión con el servidor.");
        }

        // 5. Espera la respuesta y convierte los datos a formato JSON
        const data = await response.json();

        // 7 y 8. Verificación de si el array de resultados contiene elementos
        if (data.length > 0) {
            const usuario = data[0]; // Tomamos el primer resultado

            // Renderizado dinámico de los datos en el DOM
            resultadoContainer.innerHTML = `
                <h3>¡Usuario Encontrado!</h3>
                <p><strong>Nombre:</strong> ${usuario.name}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
            `;
        } else {
            // Si el array está vacío
            resultadoContainer.innerHTML = `<p class="error">Usuario no encontrado.</p>`;
        }

    } catch (error) {
        // Manejo de errores de red o excepciones generadas
        console.error("Hubo un error:", error);
        resultadoContainer.innerHTML = `<p class="error">Ocurrió un error al realizar la búsqueda.</p>`;
    }
}