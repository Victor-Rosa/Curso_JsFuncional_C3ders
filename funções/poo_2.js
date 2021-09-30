

  // Função Construtora 
function Product(name, price, discount = 0.5){ 
    this.name = name;
    this.price = price;
    this._discount = discount;


    this.finalPrice = function(){ 
      return this.price * (1 - this._discount)
    } 
}

  


Product.prototype.log = function(){
    console.log(`Name:${this.name} Price:U$${this.price}`)
}


Object.defineProperty(Product.prototype, 'desc', {
    get: function(){
      return this._desc
    },
    set: function(newDesc){
      if(newDesc >= 0 && newDesc <=1){
        this._desc = newDesc
      }
    }

})

Object.defineProperty(Product.prototype, 'descString', {
  get: function(){
    return `${this._desc * 100}% OFF`
  }
})



const product1 =  new Product("Pencil", 1)
console.log(product1.name)
console.log(product1.price)
console.log(product1.finalPrice())

product1.desc=0.99
product1.descString
console.log(product1.desc)
console.log(product1.descString)


console.log("---------------------")

const product2 = new Product('cellphone', 1500, 0.8)
console.log(product2.name)
console.log(product2.price)

console.log(product2.finalPrice())