// 2. Declaración de la constante para el precio base de la silla
const precioBaseSilla = 4500.50;

// 3. Declaración de la constante para el IVA (21%)
const iva = 0.21;

// 4. Cálculo del valor del IVA
let valorIva = precioBaseSilla * iva;

// 5. Cálculo del precio final sumando la base y el IVA
let precioFinal = precioBaseSilla + valorIva;

// Muestra del resumen claro en la consola
console.log("--- Resumen de Precio: Mueblería Hermanos Jota ---");
console.log("Precio Base de la Silla: $" + precioBaseSilla);
console.log("IVA: $" + valorIva);
console.log("Precio Final: $" + precioFinal);
