class Product {

  // Função Construtora 
  constructor(name, price, discount = 0.5){ 
    this._name = name;
    this._price = price;
    this._discount = discount;

  }

  get finalPrice(){
    return `Final Price U$:${this._price * (1 - this._discount)}`
  }


  get name(){
    return `Product: ${this._name}`
  }

  set name(newName){
    this._name = newName.toUpperCase();
  }



  get price(){
    return `Normal Price U$:${this._price}`
  }

  get discount(){
    return `Discount: ${this._discount * 100}%` 
  }
}


const product1 =  new Product("Pencil", 1)
product1.name = "pencil"
console.log(product1.name)
console.log(product1.price)
console.log(product1.discount)
console.log(product1.finalPrice)


console.log("---------------------")

const product2 = new Product('cellphone', 1500, 0.8)
console.log(product2.name)
console.log(product2.price)
console.log(product2.discount)
console.log(product2.finalPrice)
