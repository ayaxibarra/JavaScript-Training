// 1. Declaración de la constante con la contraseña correcta
const contrasenaCorrecta = "Jota123";

// 2. Solicitud de la contraseña al usuario mediante prompt
let contrasenaIngresada = prompt("Por favor, ingresá tu contraseña:");

// 3. Estructura condicional para validar el acceso
if (contrasenaIngresada === contrasenaCorrecta) {
    // Si la contraseña es exactamente igual
    alert("¡Acceso concedido!");
} else if (contrasenaIngresada === "") {
    // Si el usuario no ingresó nada (cadena vacía)
    alert("No se ingresó ninguna contraseña");
} else {
    // Para cualquier otro valor incorrecto o si se cancela el prompt (devuelve null, que entra en este bloque)
    alert("Contraseña incorrecta. Acceso denegado.");
}