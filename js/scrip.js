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
  if (typeof texto !== "string" || typeof numero !== "number")
    return console.log("error tipo de dato incorrecto");

  let cortado = texto.substring(numero, 0);
  console.log(cortado);
};
// cortarS("Hola Mundo", 4);

/* 
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. 
*/

const cortarA = (palabra, espacio) => {
  if (typeof palabra !== "string")
    return console.warn("error tipo de dato incorrecto");
  if (espacio === undefined) return console.warn("no ingresaste el separador");

  console.log(palabra.split(espacio));
};
// cortarA("hola que tal", " ");

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
  if (typeof cadena !== "string")
    return console.warn("error tipo de dato incorrecto");
  console.log(cadena.split("").reverse().join(""));
};

// invertirC("hola mundo")

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 

*/
const contar = (palabra, buscar) => {
  if (typeof palabra !== "string" && buscar === "")
    return console.log("error tipo de dato incorrecto");

  palabra = palabra.split(" ");
  let cont = 0;
  for (let i = 0; i <= palabra.length; i++) {
    if (palabra[i] === buscar) {
      cont += 1;
    }
  }
  console.log(`la cadena tiene la palabra "${buscar}" ${cont} veces`);
};
// contar("Cuando ofrecemos un un área de un texto puede darse el caso", "un");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
const validar = (palabra) => {
  if (typeof palabra === "string" && palabra != "") {
    let oldPalabra = palabra.split("").reverse().join("").toLowerCase();
    palabra = palabra.toLowerCase();
    console.log(`${oldPalabra}` === palabra);
  } else {
    console.log("error tipo de dato incorrecto");
  }
};
// validar("reconoceR");

/*  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminar = (texto, palabra) => {
  if (typeof palabra === "string" && texto != "" && typeof texto === "string") {
    // let expReg = new RegExp(palabra, "ig");
    texto = texto.replace(new RegExp(palabra, "ig"), "");
    // texto = texto.split(palabra).join("");
    console.log(texto);
  } else {
    console.log("error tipo de dato incorrecto");
  }
};

// eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const aleatorio = () =>
  console.log(Math.round(Math.random() * (600 - 501) + 501));

// aleatorio()

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

const capicúa = (numero) => {
  if (!numero) return console.error("no ingresaste un numero");
  let myInt = numero;
  let myFunc = (num) => Number(num);
  let intArr = Array.from(String(myInt), myFunc);
  intArr = intArr.reverse().join("");
  myInt = myInt.toString();
  console.log(myInt === intArr);
};
// capicúa(2002);

const capicúa2 = (numero) => {
  if (!numero) return console.error("no ingresaste un numero");

  if (typeof numero != "string") {
    let varia = String(numero);
    let result = varia.split("").reverse().join("");
    console.info(varia === result);
  } else {
    console.error("no ingresaste un numero");
  }
};
// capicúa2(12421)

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

const factorial = (numero) => {
  if (!numero) return console.error("no ingresaste un numero");
  let num = numero;
  for (let i = 1; i < numero; i++) {
    num *= i;
  }
  console.log(num);
};
// factorial(4)

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

const esPrimo = (numero = undefined) => {
  if (typeof numero !== "number")
    return console.warn("tienes que ingresar un numero");
  if (Math.sign(numero) === -1)
    return console.warn("no puedes ingresar un numero negativo");

  let num = numero;
  let result;
  let cont = 0;
  for (let i = 1; i <= num; i++) {
    result = numero / i;
    if (result % 1 === 0) {
      console.info(result);
      cont++;
    }
  }
  cont === 2 ? console.info("es primo") : console.info("NO es primo");
};
// esPrimo(67);

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

const esPar = (numero) =>
  numero % 2 === 0 ? console.info("es par") : console.info("es inpar");

// esPar(5)

/* const esPar = (numero) => (numero % 2 === 0);

const num = prompt("ingrese un numero")

console.log(esPar(num)?`es par`:`es inpar`) */
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
const convertir = (numero = undefined, letra = "") => {
  if (typeof numero !== "number")
    return console.warn("tienes que ingresar un numero");
  if (!letra)
    return console.warn(
      "tienes que ingresar un caracter para convertit (C o F)"
    );

  switch (letra.toUpperCase()) {
    case "C":
      console.info(`${(numero = numero * (9 / 5) + 32)}°F`);
      break;
    case "F":
      console.info(`${(numero = (numero - 32) * (5 / 9))}°C`);
      break;
    default:
      console.warn(
        "tienes que ingresar un caracter VALIDO para convertit (C o F)"
      );
  }
};
// convertir(212,"f")

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

const descuento = (precio = undefined, descuento = undefined) => {
  if (typeof precio !== "number")
    return console.warn("tienes que ingresar un precio");
  if (typeof descuento !== "number")
    return console.warn("tienes que ingresar un descuento");
  if (Math.sign(descuento) === -1 || Math.sign(precio) === -1)
    return console.error("el numero no puede ser negativo");
  if (descuento > 100)
    return console.error("el descuento no puede superar el 100% ");

  return console.info(
    `el producto ${precio} con descuento queda en ${
      precio - (precio / 100) * descuento
    }`
  );
};
// descuento(2000, 10);

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

const fechaAnio = (fecha) => {
  let patron = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

  if (patron.test(fecha) !== true)
    return console.error("fecha incorrecta dd/mm/yyyy");

  fecha = fecha.split("/");

  console.info(`Desde el año ${fecha[2]} han pasado ${2022 - fecha[2]} años`);
};

// fechaAnio("31/02/2004")

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
const contarVocalesConsonantes = (cadena = "") => {
  if(cadena === "") return console.warn("no ingresaste una  cadena")

  if(typeof cadena !== 'string') return console.error(`el valor ${cadena}, NO es un String`)


}
contarVocalesConsonantes();
/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
