function calculo1 (num1){
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

let total = calculo1(3)(4)(5);
console.log(total);

function somar(numA, numB){
    return numA + numB;
}

function subtrair(numA, numB){
    return numA - numB;
}

function multiplicar(numA, numB){
    return numA * numB;
}

function calculo2(num1){
    return function (num2) {
        return function (fn){
            return fn(num1,num2);
        }

    }
}

let total2 = calculo2(3)(7);
console.log(total2(somar));
console.log(total2(subtrair));
console.log(total2(multiplicar));

