/*
//Ejercicio 1 de JavaScript
//
console.log("Hola mundo")
// Tipos de datos en JavaScript
//
// String 
// '' "" ` comillas francesas `
console.log(`hola a todos, como estan`)
// var let const 
let nombre = "Edward"
let apellidos = "CP"
let aniosTrabajo = 25
console.log(`Hola a todos, me llamo ${nombre}, ${apellidos} y llevo trabajando ${aniosTrabajo} años`)
console.log(typeoff(String(aniosTrabajo))
console.log(typeoff(Number(apellidos)))

// Validaciones básicas == ===

// == <- Significa que el valor de la izquierda es igual al valor de la derecha
// === <- Significa si el valor de la izquierda coincide con el valor y tipo de la derecha
// '5' == 5 // <- true
// '5' === 5 // <- devuelve false
// ternarias evaluacion expresion ? verdadero : falso


const edad = "23"
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad") */

// Ejercicio dada la edad, los minutos y los segundos. Comprobar primero si la 
// edad es un numero positivo y mayor que 18 estrictamente y segundo comprobar 
// si la hora y los minutos son valores validos de nuestro sistema de numeración
let edad = prompt("Ingresa tu edad")
let hora = prompt("Dime la hora")
let minutos = prompt("Dime los minutos")
let segundps = prompt("Dime los segundos")

edad <= 0 & >= 18 ? console.log("Tu edad es correcta") : console.log("La edad introducida es incorrecta")
hora <= 0 & > 60 ? console.log("La hora pasada es correcta") : console.log("La hora es correcta")
minutos <= 0 & > 60 ? console.log("Los minutos pasados son correctos") : console.log("Los minutos son correctos") 
segundos <= 0 & > 60 ? console.log("Los segundos pasados son correctos") : console.log("Los segundos pasados son incorrectos")
