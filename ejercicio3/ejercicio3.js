// 1. Inicialización de la variable acumuladora para el total de la compra
let totalCompra = 0;

// Variable de control para el bucle (inicializada en true para que comience)
let seguirComprando = true;

// 2 y 3. Bucle while que se ejecuta mientras el usuario quiera agregar productos
while (seguirComprando) {
    seguirComprando = confirm("¿Desea agregar un producto al carrito?");

    // 4. Si el usuario hace clic en "Aceptar" (true)
    if (seguirComprando) {
        let entradaPrecio = prompt("Ingrese el valor del producto:");

        // Conversión del string ingresado a número usando parseFloat()
        let precioProducto = parseFloat(entradaPrecio);

        // Verificación de si el valor ingresado es un número válido (no NaN) y mayor o igual a 0
        if (!isNaN(precioProducto) && precioProducto >= 0) {
            totalCompra += precioProducto; // Suma el valor al total de la compra
        } else {
            alert("Valor inválido. Por favor, ingrese un número válido.");
        }
    }
}

// 6. Fuera del bucle, muestra el resultado final con un alert()
alert("El total de su compra es: $" + totalCompra.toFixed(2));