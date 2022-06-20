const integer = 102
const float = 13.9

console.log(`
  ${integer},
  ${float}
`)

const basic = 34
const stringified = basic.toString()
console.log(stringified)
console.log(typeof(stringified))


const num = 1.5
const rounded = Math.round(num)
console.log(rounded)

const test = 12
const bis = 5
console.log(`
  addition : ${test + bis},
  soustraction : ${test - bis},
  division : ${test / bis},
  multiplication : ${test * bis},
  modulo: ${test % bis}
`)


const array = [1, 2, 3, 4, 5]

array.forEach(element => {
  if(999 % element == 0){
    console.log(`${element} completely devides 999`)
  }
});

array.forEach(element => {
  if(25 % element == 0){
    console.log(`${element} completely devides 25`)
  }
});

array.forEach(element => {
  if(190280 % element == 0){
    console.log(`${element} completely devides 190280`)
  }
});

array.forEach(element => {
  if(47 % element == 0){
    console.log(`${element} completely devides 47`)
  }
});

array.forEach(element => {
  if(691 % element == 0){
    console.log(`${element} completely devides 691`)
  }
});