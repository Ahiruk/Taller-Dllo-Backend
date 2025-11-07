//PUNTO 1

function findMax(lista){
    let max = lista[0]
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i]
        }
    }
    return max
}


//PUNTO 2

function includes(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === numero) {
        return true
      }
    }
    return false
}



//PUNTO 3

function sum(lista) {
    let acum = 0
    for (let i = 0; i < lista.length; i++) {
        acum += lista[i]
    }
    return acum
}

  
//PUNTO 4

function missingNumbers(lista) {
    let min = lista[0]
    let max = lista[0]
    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
          min = lista[i]
        }
        if (lista[i] > max) {
          max = lista[i]
        }
    }
  
    let faltantes = []
    for (let i = min + 1; i < max; i++) {
        let encontrado = false
        for (let j = 0; j < lista.length; j++) {
          if (lista[j] === i) {
            encontrado = true
            break
          }
        }
        
        if(!encontrado){
            faltantes.push(i)
        }
    }
    return faltantes
}

module.exports = {
    findMax,
    includes,
    sum,
    missingNumbers
}