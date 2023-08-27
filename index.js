//Arrow function with implicit return;
// const sum = (a,b) => a+b 
// sum(2,3);

//arrays
// const groceries = ['banana','apple','mango','gova'];
// console.log(groceries[2]);
// groceries.push('blueberry');
//slice ,push , indexof,length
// console.log(groceries.slice());
// console.log(groceries.indexOf('mango'));
// console.log(groceries.length);
// console.log(groceries);


//OBJECTS{}
// const person ={
//   name:'Murali',
//   shirt:'white',
//   color:'green',
//   skills:'javascript'
// }


// acess objects using dot
// console.log(person.color);
// bracket notation
// console.log(person['name']);
//  person['phone'] = 6380975343
//  console.log(person['phone']);
 

 //Es6 arrow function with (2 arguments)
//  const introducer = (name ,shirt) =>{
//   const person ={
//     name :name,
//     shirt:shirt,
//     assets:90000,
//     liabilities:60000,
//     networth:function(){
//       return this.assets - this.liabilities
//     }
//   }
//   const intro = `Hi my name is ${person.name} ,my shirt color is ${person.shirt} and my net worth is
//    ${person.networth()}`
//    return intro
//  }

//  console.log(introducer('Murali','blue'));


//loops
const fruits = ['banana','apple','mango','gova'];
// for (let i=0; i<fruits.length;i++){
//   console.log(i,fruits[i]);
// }

for(let fruit of fruits){
  console.log(fruit)
}

const number = [1,2,3,4,5,6,7,8,9];
const result =[];
for(let num of number){
  // console.log(num *2)
  // result.push(num*2);
 
}
console.log(double([1,2,3,44,5]));