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

console.log(findMax([3, 17, -1, 4, -19]))

//PUNTO 2

function includes(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === numero) {
        return true
      }
    }
    return false
}
console.log(includes([3, 17, -1, 4, -19], 2)) 
console.log(includes([3, 17, -1, 4, -19], 4)) 


//PUNTO 3

function sum(lista) {
    let acum = 0
    for (let i = 0; i < lista.length; i++) {
        acum += lista[i]
    }
    return acum
}

console.log(sum([3, 17, -1, 4, -19]))
  
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

console.log(missingNumbers([7,2,4,6,3,9]))