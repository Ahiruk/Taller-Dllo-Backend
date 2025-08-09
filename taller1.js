//PUNTO 1

function convertidorTemp(temperatira){

    const fahrenheit = (temperatira * 9/5) + 32;
    return fahrenheit;
}

console.log(convertidorTemp(-40));

//PUNTO 2

const resolvedor = (a, b, c,signo) => { //signo = true para numeros positivos y false para negativos
    let x;
    if (signo) {
        x = (-b + Math.sqrt((b**2) - (4 * a * c))) / (2 * a);
    }else {
        x = (-b - Math.sqrt((b**2) - (4 * a * c))) / (2 * a);
    }
    return x;

}

console.log(resolvedor(1, 5, 4, false));

//PUNTO 3

function mejorParidad (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(mejorParidad(5));


//PUNTO 4

function peorParidad (num) {
while (num >= 1 || num <= 10) {
    while (num===1 || num===2 || num===3 || num===4 || num===5 || num===6 || num===7 || num===8 || num===9 || num===10) {
        while (num === 1) {
            return false;
            
        }
        while (num === 2) {
            return true;
        }
        while (num === 3) {
            return false;
        }
        while (num === 4) {
            return true;
        }
        while (num === 5) {
            return false;
        }
        while (num === 6) {
            return true;
        }
        while (num === 7) {
            return false;
        }
        while (num === 8) {
            return true;
        }
        while (num === 9) {
            return false;
        }
        while (num === 10) {
            return true;
        }
        
    }
    
  }
  
  

}

console.log(peorParidad(1));