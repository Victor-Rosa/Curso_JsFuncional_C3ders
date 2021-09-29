function createRange (valueA, valueB, valueC) {

  const list = []

  if (valueB == null && valueC == null) {
    for (let i = 1; i <= valueA; i++){
      list.push(i)
    }
  }


  else if (valueA > valueC && valueB < 0){
    for(let i = valueA; i >= valueB; i -= valueC){
      list.push(i)
    }
  }

  else if(valueA <= valueB && valueC <= valueA){
    for(let i = valueA; i <= valueB; i+= valueC){
      list.push(i)
    }
  }

  else if(valueA <= valueB){
    for(let i = valueA; i <= valueB; i++){
      list.push(i)
    }
  }

  else if(valueA >= valueB){
    for(let i = valueA; i >= valueB; i--){
      list.push(i)
     
    }
  }

  return list;
}


let test1 = createRange(6,11) // certo
console.log(test1) 

let test2 = createRange(6,2) // certo
console.log(test2) 

let test3 = createRange(10,19,2) // certo
console.log(test3) 

let test4 = createRange(8, -3 ,4) // certo
console.log(test4) 

let test5 = createRange(5) // certo
console.log(test5) 