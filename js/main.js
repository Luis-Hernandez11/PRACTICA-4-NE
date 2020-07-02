'use strict'
//vocales
function vocal() {
    var palabra = document.getElementById('vocales-entrada').value;
    /*var cadenarevertida = "";

    for (var i = palabra.length - 1; i >= 0; i--) {
        cadenarevertida += palabra[i];
    }
    console.log(cadenarevertida);
*/

    document.getElementById('vocales-salida').innerHTML = palabra;

}

function remplazo(){
	var palabra1 = document.getElementById('vocales1-entrada').value;
	var vocal = "a e i o u";
	var str = vocal.replace("i", palabra1);

	document.getElementById('vocales1-salida').innerHTML = str;
}

function agregado(){
	var palabra2 = document.getElementById('vocales2-entrada').value;
	var vocal1 = ["a","e","i","o","u"];
	vocal1.push(palabra2);
	//var texto = str2.join();

	document.getElementById('vocales2-salida').innerHTML = vocal1;


}

function espacio(){
	var palabra3 = document.getElementById('vocales3-entrada').value;
	var vocal2 = "a e x i o u";
	var str2 = vocal2.replace("x",palabra3);

	document.getElementById('vocales3-salida').innerHTML = str2;
}

//polindromo

function invertir() {
    var p1_input = document.querySelector('#p1-input').value;

    var p1_array = p1_input.split('').reverse();
    var p1_res = '';

    p1_array.forEach(function(palabra, i) {
        if (i != 0 || i != p1_array.length) p1_res += '';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;
}

//articulos
function articulos2(){
var articulo = new Array ("iPhone","televisor Trinitron","Macintosh","Walkman","IBM","Reproductor de música Victrola","Radio de transitores TR1","Brownie de Kodak","iPod","Magic Wand","Computadora Microsoft","Bocinas","Teclado","Mouse","Celular");

var i,j,h,k,m,n;
document.write("<h1>EJERCICIO 6 - PRACTICA 4</h1> <br/>");
document.write("<h2>Articulos aleatorios</h2> <br/>");

for(i=0; i<10;i++){
			var res = Math.floor(Math.random() * (10 - 0)) + 0;
			articulo[res];
		}

for(j=0;j<articulo.length;j++){
document.write(articulo[j]);
document.write("<br/>");
}

//orden ascendente
articulo.sort();
document.write("<h2>Articulos ordenados ascendentemente</h2><br/>");
for(h=0;h<articulo.length;h++){
document.write(articulo[h]);
document.write("<br/>");
}

//orden descendente
var ord2 = articulo.reverse();
document.write("<h2>Articulo ordenados descendentemente</h2><br/>");
for(k=0;k<articulo.length;k++){
document.write(ord2[k]);
document.write("<br/>");
}

articulo.push(prompt("ESCRIBA NUEVO ARTICULO EN MAYUSCULA"));
articulo.sort();
document.write("<h1>EJERCICIO 7 - PRACTICA 4</h1>");
document.write("<h2>Articulos con nuevo articulo agregado</h2><br/>");
for(m=0;m<articulo.length;m++){
document.write(articulo[m]);
document.write("<br/>");
}

//solicite al usuario el nombre de un articulo y eliminelo
var indice = articulo.indexOf(prompt("Escriba el articulo a eliminar"));
if(indice > -1){
	articulo.splice(indice, 1);
}
document.write("<h1>EJERCICIO 8 - PRACTICA 4</h1>");
document.write("<h2>ELEMENTO ELIMINADO</h2><br/>");
for(n=0;n<articulo.length;n++){
document.write(articulo[n]);
document.write("<br/>");
}

}//cierre de la funcion principal articulos
