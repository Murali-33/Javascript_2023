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

// for(let fruit of fruits){
//   console.log(fruit)
// }

// const number = [1,2,3,4,5,6,7,8,9];
// const result =[];
// for(let num of number){
  // console.log(num *2)
  // result.push(num*2);
 
// }
// console.log(double([1,2,3,44,5]));
 

// count the letters in the string
// const countLetters =() =>{
//   let result =0;
//   const letter = 'Hi , How are you ?'
//   //ge the index of the letters
//   //let (name of letter)
//   for(name in letter){
//     // console.log(name)
//     result = {Result:name};
//     console.log(letter.length);
//   }
//   return result;
// }
// console.log(countLetters());

//sum of the array
// let sumArray =(numbers)=>{
//   let result = 0;
//   //for loop
//   for(const num of numbers){
//    console.log(num) 
//    result = result+num;
//   }
//   return {result:result}
// }
// const numbers = [1,2,3,4,5,6,7];
// console.log(sumArray (numbers));

//Eample 1

// const newsumArray = (numbers)=>{
//   let result = 0;
//   for(let sum of numbers){
//     result = result+sum;
//   }
//   return result;
// }
// numbers=[3,4,5,6,7,8,9,10]
// console.log(newsumArray(numbers))

//find the highest number of the array
// const highNum=(num)=>{
//   let result = num[0]
//   //for loop
//   for(numbers of num){
//     if(numbers > result){
//       result= numbers
//     }
//   }
//   return result
// }
// const num =[1,2,3,4,5,6,7,8,9,567]
// console.log(highNum(num))

//Example 2
// const findMax =(numbers)=>{
//   let result = numbers[0]
//   //for loop
//   for(num of numbers){
//     if(num > result){
//       result = num
//     }
//   }
//   return result
// }
// // const numbers =[1,2,3,4,5,6,7,10000]
// console.log(findMax([1,2,9,8,7,6]));


