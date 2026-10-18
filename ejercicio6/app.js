// 1. Creación del array de objetos catalogoMuebles con al menos 3 productos
const catalogoMuebles = [
    {
        id: 1,
        nombre: "Mesa de Comedor Roble",
        precio: 45000,
        imagenURL: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        nombre: "Silla Ergonómica de Oficina",
        precio: 18500,
        imagenURL: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        nombre: "Sofá de 3 Cuerpos",
        precio: 95000,
        imagenURL: "https://via.placeholder.com/150"
    }
];

// 3. Selección del contenedor principal desde el DOM
const productContainer = document.getElementById("product-container");

// 4. Iteración sobre el array usando .forEach()
catalogoMuebles.forEach(producto => {
    // 5. Creación de la tarjeta y sus elementos internos
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("product-card");

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = "$" + producto.precio;

    const imagen = document.createElement("img");
    imagen.src = producto.imagenURL;
    imagen.alt = "Imagen de " + producto.nombre;

    // Inserción de los elementos hijos dentro de la tarjeta usando appendChild()
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);

    // Inserción de la tarjeta completa en el contenedor principal del DOM
    productContainer.appendChild(tarjeta);
});