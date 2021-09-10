// Arrow function 
const felizNatal = () => console.log('Feliz Natal!')
console.log(felizNatal);
felizNatal();

const saudacao = nome => "olá " + nome + ", tudo bem com você?"
console.log(saudacao("Victor"))
saudacao("Victor")

const saudacao2 = nome => `Olá ${nome}, tudo bem com você?`
console.log(saudacao2('Beatriz'))

const somar = (...arrayNumeros) => {
    console.log(Array.isArray(arrayNumeros))
    let somaTotal = 0
    for (let num of arrayNumeros) {
        somaTotal += num
    }

    return somaTotal 
}


const potencia = base =>  expo =>  Math.pow(base, expo)

console.log(potencia(2)(10))

console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9,10))

//this 
Array.prototype.ultimo = function(){
    console.log(this[this.length - 1])
}

 const number = [1,2,3,4,5698];
 number.ultimo()