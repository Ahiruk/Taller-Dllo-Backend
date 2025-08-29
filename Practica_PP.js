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