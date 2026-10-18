// 1. Creación del objeto preferenciasUsuario
const preferenciasUsuario = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true
};

// 2. Selección de los botones desde el DOM
const botonGuardar = document.querySelector("#btn-guardar");
const botonCargar = document.querySelector("#btn-cargar");

// 3. Event listener para el botón "guardar"
botonGuardar.addEventListener("click", () => {
    // Convierte el objeto a un string JSON usando JSON.stringify()
    const preferenciasString = JSON.stringify(preferenciasUsuario);

    // Guarda el string en localStorage bajo la clave 'misPreferencias'
    localStorage.setItem("misPreferencias", preferenciasString);

    // Muestra alerta de éxito
    alert("Preferencias guardadas");
});

// 4. Event listener para el botón "cargar"
botonCargar.addEventListener("click", () => {
    // Obtiene el string JSON almacenado en localStorage
    const preferenciasString = localStorage.getItem("misPreferencias");

    // Verifica si existen datos guardados antes de intentar parsearlos
    if (preferenciasString) {
        // Convierte el string de vuelta a un objeto JavaScript usando JSON.parse()
        const objetoRecuperado = JSON.parse(preferenciasString);

        // Muestra el objeto recuperado en la consola para verificar
        console.log("Preferencias cargadas:", objetoRecuperado);
        alert("Preferencias cargadas con éxito. Revisá la consola (F12).");
    } else {
        alert("No se encontraron preferencias guardadas previamente.");
    }
});