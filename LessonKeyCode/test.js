window.a = 10;

b = {

a: 15,
price: 1500,
price: 2500,

}

function aaa () {
  return this.a
}

aaa = aaa.bind(b)

console.log(aaa());

console.log(b.price)