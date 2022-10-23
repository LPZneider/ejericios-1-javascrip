import { objto, arrayss } from "./modulo.js";

/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. 
*/

const text = (palabra) => {
  let texto = palabra;
  if (typeof texto == "string") {
    console.log(palabra.length);
  } else {
    console.warn("error tipo de dato incorrecto");
  }
};
// text("gato");

/* 
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
*/

const cortarS = (palabra, numero) => {
  let texto = palabra;
  if (typeof texto === "string" && typeof numero === "number") {
    let cortado = texto.substring(numero, 0);
    console.log(cortado);
  } else {
    console.log("error tipo de dato incorrecto");
  }
};
// cortarS("Hola Mundo", 4);

/* 
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. 
*/

const cortarA = (palabra, espacio) => {
  let texto = [];
  texto = palabra;
  let ext = espacio;
  if (typeof ext === "string") {
    let cortado = texto.split(ext);
    console.log(cortado);
  } else {
    console.log("error tipo de dato incorrecto");
  }
};

// cortarA("hola mundo de perra"," ")

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirX = (cadena, numero) => {
  let texto = cadena;
  if (
    typeof texto === "string" &&
    typeof numero === "number" &&
    numero > 0 &&
    cadena != ""
  ) {
    for (let i = 1; i <= numero; i++) console.log(texto + " " + i);
  } else console.log("error tipo de dato incorrecto");
};
// repetirX("plooa", 4);

/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirC = (cadena) => {
  let texto = cadena;
  if (typeof texto === "string") {
    texto = texto.split("").reverse().join("");
    console.log(texto);
  } else {
    console.log("error tipo de dato incorrecto");
  }
};

// invertirC("hola mundo")

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 

*/
const contar = (palabra, buscar) => {
  palabra = palabra.split(" ");
  let cont = 0;
  for (let i = 0; i <= palabra.length; i++) {
    if (palabra[i] === buscar) {
      cont += 1;
    }
  }
  console.log(cont);
  // console.log(palabra)
  // console.log(cont)
};
// contar("Cuando ofrecemos un un área de un texto puede darse el caso", "un");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
const validar = (palabra) => {
  if (typeof palabra === "string" && palabra != "") {
    let oldPalabra = palabra.split("").reverse().join("");
    console.log(`${oldPalabra}` === palabra);
  } else {
    console.log("error tipo de dato incorrecto");
  }
};
// validar("reconocer");

/*  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminar = (texto,palabra) => {
  if (typeof palabra === "string" && texto != "" && typeof texto === "string" ) {

    // let expReg = new RegExp(palabra, "ig");
    // texto = texto.replace(/(xyz)/gm , "")
    texto = texto.split(palabra).join("")
    console.log(texto)








  } else {
    console.log("error tipo de dato incorrecto");
  }
}

eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

/* let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque lorem recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";

     let expReg = new RegExp("lorem", "ig");
     console.log(expReg.test(cadena));
     console.log(expReg.exec(cadena));

     let expReg2 = /lorem{1,}/ig;
     console.log(expReg2.test(cadena));
     console.log(expReg2.exec(cadena)); */