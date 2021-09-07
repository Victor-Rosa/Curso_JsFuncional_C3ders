function bomDia(){
    console.log("Bom Dia!")
}

const boaTarde = function () {
    console.log("Boa Tarde!")
}

// Passar uma função como parâmetro para outra
function executaQualquerCoisa(fn) {
    if(typeof fn === "function"){
        fn();
    }
    
}

// Retomar uma função a partir de uma outra função

function potencia(base){
    return function(expo){
        return Math.pow(base, expo);
    }
}
 
const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
console.log(potencia(2)(4));

executaQualquerCoisa(3);
executaQualquerCoisa(boaTarde);
executaQualquerCoisa(bomDia);