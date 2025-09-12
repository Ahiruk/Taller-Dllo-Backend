//PUNTO 1
function CantStrings(int){
    let out = 0;
    for (let i = 0; i < int.length; i++) {
        if(int[i].length >25){
            out= out + 1;
        }
    }
    return out;
}
let arrayStrings = ["Hola", "Mi nombre es Martin Elias y estoy cursando Programacion para profesionales", "Estoy aprendiendo mucho", "JavaScript es un lenguaje muy divertido"];
console.log(CantStrings(arrayStrings));

//PUNTO 2

function exponencial(base, exponente){
    let acum = 1;
    for (let i = 0; i < exponente; i++) {
        acum = acum * base;
    }
    return acum;
}

console.log(exponencial(2,3));


//PUNTO 3
