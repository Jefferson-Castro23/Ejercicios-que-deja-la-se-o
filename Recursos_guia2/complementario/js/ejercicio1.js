// Cree un script que permita el ingreso de un número entero y muestre en pantalla la siguiente
// información: 
// 1) Cantidad de cifras,
// 2) Cantidad de cifras impares,
// 3) Cantidad de cifras pares,
// 4) Suma de cifras impares,
// 5) Suma de cifras pares,
// 6) Suma de todas las cifras,
// 7) Cifra mayor,
// 8) Cifra menor.

let numero = Number(prompt("Ingrese el numero")).toFixed(0);
let numeroString = numero.toString();

document.write("Cantidad de Cifras: " + cantidadCifras() + "<br>");
document.write("Cantidad de Cifras Impares: " + cifrasImpares() + "<br>");
document.write("Cantidad de Cifras Pares: " + "<br>");
document.write("Suma de cifras impares: " + "<br>");
document.write("Sumas de Cifras Pares: " + "<br>");
document.write("Sumas de todas las cifras: " + "<br>");
document.write("Cifra Mayor: " + "<br>");
document.write("Cifra Menor: " + "<br>");


function cantidadCifras () {
    return numeroString.split("").length;
}

function cifrasImpares () {
    let cifrasImpares = 0;
    let cifras = numeroString.split("");
    
    for (let i = 0; i < cifras.length; i++) {
        if (cifras[i] % 2 == 1) {
            cifrasImpares++;
            console.log(cifras[i]);
        } else {
            console.log("Numero par" + cifras[i]);
        }
    }
    return cifrasImpares;
}