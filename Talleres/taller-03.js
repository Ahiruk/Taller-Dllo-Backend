// taller-03.js

// Punto 1
function desglosarString(texto, tipo) {
    let vocales = "aeiouAEIOU"
    let contador = 0

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i]
        if (vocales.indexOf(letra) !== -1) {
            if (tipo === "vocales") {
                contador = contador + 1
            }
        } else {
            if (tipo === "consonantes") {
                contador = contador + 1
            }
        }
    }

    return contador
}



// Punto 2
function twoSum(lista, objetivo) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] + lista[j] === objetivo) {
                return [i, j]
            }
        }
    }
    return []
}



// Punto 3
function conversionRomana(romano) {
    let valores = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    for (let i = 0; i < romano.length; i++) {
        let actual = valores[romano[i]]
        let siguiente = valores[romano[i + 1]]

        if (siguiente && actual < siguiente) {
            total = total - actual
        } else {
            total = total + actual
        }
    }
    return total
}


// Punto 4
function descomposicion(cadena) {
    let partes = cadena.split(",")
    let palabra = partes[0]
    let diccionario = []

    for (let i = 1; i < partes.length; i++) {
        diccionario[i - 1] = partes[i]
    }

    for (let i = 0; i < diccionario.length; i++) {
        for (let j = 0; j < diccionario.length; j++) {
            if (diccionario[i] + diccionario[j] === palabra) {
                return [diccionario[i], diccionario[j]]
            }
        }
    }

    return []
}

