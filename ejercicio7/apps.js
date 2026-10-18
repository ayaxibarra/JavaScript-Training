// 2. Selección del botón usando querySelector
const botonFavorito = document.querySelector("#btn-favorito");

// 3. Adición del "escuchador de eventos" para el evento 'click'
botonFavorito.addEventListener("click", () => {
    
    // 4. Uso de classList.toggle para alternar la clase 'favorito'
    botonFavorito.classList.toggle("favorito");

    // Estructura if/else para verificar si tiene la clase y cambiar el texto
    if (botonFavorito.classList.contains("favorito")) {
        botonFavorito.textContent = "⭐ Quitar de Favoritos";
    } else {
        botonFavorito.textContent = "❤️ Añadir a Favoritos";
    }
});