
alert("Abrir consola o presione F12")

let edad = Number(prompt("Ingresa su edad"));

switch (true) {

    case edad>=18:

        console.log("Es mayor de edad");
        break;

    default:

        console.log("La edad ingresada no cumple con los parámetros");
        break;
}