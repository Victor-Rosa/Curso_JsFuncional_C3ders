function gerarNumeroEntre(min, max){
  if (min > max) [max, min] = [max, min];
  return new Promise(resolve => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
  })
}

gerarNumeroEntre(10, 60)
  .then(num => num*10)
  .then(numx10 => `O número entre esses valores vezes 10 é: ${numx10}`)
  .then(console.log)