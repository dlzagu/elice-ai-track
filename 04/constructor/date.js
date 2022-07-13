const now = new Date();

// let kim = {
//   name: "길동",
//   adress: "부산",
// };
// let park = {
//   name: "park",
//   adress: "부산",
// };

let sum = {
  a: 1,
  b: 2,
};

function Adress(name, adress) {
  this.name = name;
  this.address = adress;
}

let park = new Adress("박", "서울");
let lee = new Adress("이", "서울");
let see = new Adress();

console.log(park);
console.log(lee);
console.log(see);

// function Calculator(a, b) {
//   return a + b;
// }

// Calculator(1, 2);

function Cal() {
  this.a = 1;
  this.b = 2;
  this.sum = function () {
    return this.a + this.b;
  };
}

const c = new Cal();
console.log(c.sum());

// console.log(now);
// console.log(typeof now);

// console.log("Year:" + now.getFullYear());
// console.log("month:" + now.getMonth());
console.log(now.toLocaleString());
