let p = new Promise(function(resolve){
  resolve({
    nome: 'Roberto',
    idade: 21,
  })// <- Promise só podem gerar um único valor

})

const pegarNome = objeto => objeto.nome;

const pegarPrimeiraLetra = string =>  string[0];


const letraMinuscula = letra => letra.toLowerCase()

p
  .then(pegarNome) // O resultado de um método .then é automaticamente passado para o próximo then
  .then(pegarPrimeiraLetra)
  .then(letraMinuscula) 
  .then(console.log)