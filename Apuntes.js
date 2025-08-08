let variable1 =1; 
console.log(typeof variable1); //number
 
const variable2 = "1";
console.log(typeof variable2)//string


function suma(a, b) {
    return a + b;
}

console.log(suma(variable1, variable2)); // "11" (string concatenation)

const suma2 = (a, b) => {
    return a + b;
}

const suma3 = function(a, b) {
    return a + b;
}

let variabloenosospechopsa = 1;

if (variabloenosospechopsa === 1) {
    console.log("La variable es igual a 1");
}else if (variabloenosospechopsa === 2) {
    console.log("La variable es igual a 2");
}else {
    console.log("La variable no es ni 1 ni 2");
}

// == valor iguañ
// === valor y tipo igual
// != valor diferente
// !== valor y tipo diferente

const maxFactorial = 10;
let factorial = 1;

for (let i = 1; i <= maxFactorial; i++) {
    factorial *= i; // factorial = factorial * i
}
console.log(`El factorial de ${maxFactorial} es ${factorial}`);

const acelerando = true;
let velocidad = 0;
