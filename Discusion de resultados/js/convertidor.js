function init() {
//Ingresar los datos de los números a operar
var num = prompt('Introduzca el primer numero de metros:','');

//Elemento div donde se mostrará el menú de las operaciones
var operaciones = document.getElementById('operaciones');
//Elemento div donde se mostrarán los resultados
var resultado = document.getElementById('resultado');
//Creando el contenido de la página
var contenido = "<header>\n";
contenido += "\t<h1></h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";

contenido += "</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
operaciones.innerHTML = contenido;
//Preparando el manejo del evento click sobre los enlaces del menú
var opciones = document.getElementsByTagName('a');
//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento click
for(var i=0; i<opciones.length; i++){
switch(i){
case 0:
//Función sumar
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + num + " * " + 3.281 +
" = " + (parseFloat(num) * parseFloat(3.281)) + "</p>\n";
}
break;
case 1:
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + num + " * " + 39.37 +
" = " + (num * 39.37) + "</p>\n";
}
break;
case 2:
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + num + " * " + 1.094 +
" = " + (num * 1.094) + "</p>\n";
}
break;
case 3:
opciones[i].onclick = function(){
if(op2 == 0){
resultado.innerHTML = "<p class=\"letterpress\">No se puede dividir entre cero</p>";
}
else {

resultado.innerHTML = "<p class=\"letterpress\">" + num + " / " +
op2 + " = " + Math.round((op1 / op2) * 100) / 100 + "</p>\n";
}
}

}
}
}
window.onload = init;