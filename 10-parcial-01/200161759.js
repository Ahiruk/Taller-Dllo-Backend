const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI
  let cant =0;
  for (let i = 0; i < datos.length; i++) {
    if(promedio(datos[i].cursos)<3.3){
      cant += 1
    }
    
  }

  function promedio(notas){
    let suma =0;
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i].nota
    }
    return suma/notas.length
  }

  return cant;
}
console.log(puntoUno(datos))

function puntoDos(estudiantes) {
  // CODIGO DE PUNTO 2 AQUI
  let lista = []
  for (let i = 0; i < estudiantes.length; i++) {
    lista[i] = estudiantes[i].nombre + " " + estudiantes[i].apellido  
    
  }

  return lista;
}
console.log(puntoDos(datos))
function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI

  return [];
}

function puntoCuatro(numeros) {
  // CODIGO DE PUNTO 4 AQUI
  let suma= 0
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }
  return suma/numeros.length;
}
const lista = [5,3,9,3,5,5,2]
console.log(puntoCuatro(lista))

function puntoCinco(palabra) {
  // CODIGO DE PUNTO 5 AQUI
  let pal = palabra.length -1;
  for (let i = 0; i < pal/2; i++) {
    let inicio =  palabra[i]
    let fin = palabra[pal-i]

    if (inicio !=fin){
      return false
    }
    
  }
  return true
}
console.log(puntoCinco("loca"))

function puntoSeis(palabra) {
  // CODIGO DE PUNTO 6 AQUI
  let inversa =""
  for (let i = palabra.length -1; i >=0; i--) {
    inversa += palabra[i] 
  }
  return inversa
}
console.log(puntoSeis("Hola"))
// CODIGO DE PUNTO 7 AQUI
