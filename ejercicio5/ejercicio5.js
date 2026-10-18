// 1, 2, 3 y 4. Declaración de la función aplicarDescuento
function aplicarDescuento(precio, porcentajeDescuento) {
    let montoDescuento = precio * (porcentajeDescuento / 100);
    let precioFinal = precio - montoDescuento;
    return precioFinal;
}

// 5. Declaración de los precios originales de los dos productos de "Mueblería Jota"
let precioMesa = 20000;
let precioSofa = 80000;

// Definimos los porcentajes de descuento correspondientes
let descuentoMesa = 10;
let descuentoSofa = 25;

// 6 y 7. Llamado a la función y almacenamiento de los resultados en variables
let precioFinalMesa = aplicarDescuento(precioMesa, descuentoMesa);
let precioFinalSofa = aplicarDescuento(precioSofa, descuentoSofa);

// Mostrar los resultados en la consola con un formato claro
console.log("Precio original de la mesa: $" + precioMesa + ". Descuento: " + descuentoMesa + "%. Precio final: $" + precioFinalMesa);
console.log("Precio original del sofá: $" + precioSofa + ". Descuento: " + descuentoSofa + "%. Precio final: $" + precioFinalSofa);