const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt')

function displayfile(_, data){
    console.log(data);
}

console.log("inicio");
fs.readFile(caminho, 'utf8', function(err, data){console.log(data);});
console.log("fim")

console.log("Inicio_Sync");
const dataSync = fs.readFileSync(caminho)
console.log(dataSync.toString())
console.log("Fim_Sync")