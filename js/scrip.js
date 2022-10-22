/* 


3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

import { objto, arrayss } from "./modulo.js";

/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. 
*/
/*
function text (palabra){
    let texto = palabra;
    if (typeof texto == 'string' ){
        console.log(palabra.length)
    }else{
        console.log("error tipo de dato incorrecto")
    }
} */

/* 
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
*/
/* 
function cortarS (palabra, numero) {
    let texto = palabra;
    if (typeof texto == 'string' && typeof numero == 'number' ){
        let cortado = texto.substring(numero,0)
        console.log(cortado)
    }else{
        console.log("error tipo de dato incorrecto")
    }
}
cortarS("Hola Mundo", 4) 
*/

/* 

3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. 
*/
/*
  function cortarA (palabra, espacio){
    let texto = [];
    texto = palabra;
    let ext = espacio;
    if (typeof ext == 'string' ){
        let cortado = texto.split(ext);
        console.log(cortado)
    }else{
        console.log("error tipo de dato incorrecto")
    }
 }

cortarA("hola mundo de perra"," ") 
*/
/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
/* 
function repetirX(cadena, numero) {
  let texto = cadena;
  if (typeof texto == "string" && typeof numero == "number") {
    for (let i = 1; i <= numero; i++) {
      console.log(texto);
    }
  } else {
    console.log("error tipo de dato incorrecto");
  }
}
repetirX("hola gatosss", 3) 
*/

/*

7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/


/* 
 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirC(cadena) {
  let texto = cadena;
  if (typeof texto == "string") {
    texto = texto.split("");
    texto = texto.reverse();
    texto = texto.join("")
    console.log(texto)
  } else {
    console.log("error tipo de dato incorrecto");
  }
}
invertirC("hola mundo")
 */

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 
 */

function contar (cadena, busqueda) {
    let texto = cadena;
    let espacio = busqueda;
    if (typeof texto == "string" && typeof espacio == "string") {
       
           
    }else {
      console.log("error tipo de dato incorrecto");
    }
  }

  contar("hola la la la  perra de calle","la")