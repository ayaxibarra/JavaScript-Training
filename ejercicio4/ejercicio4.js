// 1. Preguntar al usuario la cantidad y convertir el resultado a número entero
let cantidadProductos = parseInt(prompt("¿Cuántos productos desea agregar a la lista?"));

// Verificamos que se haya ingresado un número válido antes de ejecutar el bucle
if (!isNaN(cantidadProductos) && cantidadProductos > 0) {
    
    // 2. Bucle for que se ejecuta desde 1 hasta la cantidad indicada
    for (let i = 1; i <= cantidadProductos; i++) {
        // 3. Simulación de la creación de cada producto en la consola
        console.log("Producto #" + i + " agregado");
    }

    // 4. Mensaje de resumen al finalizar el bucle
    console.log("Se han agregado " + cantidadProductos + " productos a la lista.");

} else {
    console.log("No se ingresó una cantidad válida.");
}