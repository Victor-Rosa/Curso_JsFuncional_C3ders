const somar = (numA, numB) => console.log(numA + numB);
const subtrair = (numA, numB) => console.log(numA - numB);
const dividir = (numA, numB) => numA / numB;


function exec (fn, numA, numB) {
  return fn(numA, numB);
}

exec(somar,50, 50);
exec(subtrair,50, 30);
let totDiv= exec(dividir, 512, 2);
console.log(totDiv);


setInterval(()=> console.log("Executando..."), 2000);

