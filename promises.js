//Javascript promise

// 3 status
//initial state
//Fulfilled or suceed
//rejected or failed

// let p = new Promise((resolve,rejet)=>{
//   let name = prompt("Please enter your Name ?")
//   if (name === "Murali"){
//     resolve("sucess")
//   }else{
//     rejet("Failed")
//   }
// })

// p.then((message)=>{
//   console.log('My nme is :',message);
// }).catch((message)=>{
//   console.log('This is not my name :'+message);
// })

// Example:

var add = (x,y)=>{
  return new Promise ((resolve,reject)=>{
    var sum = x+y;
    if(sum){
      resolve(sum);
    }else{
      reject(Error("Could not  add the two values"))
    }
  })
};

var subtract =(x,y)=>{
  return new Promise((resolve,reject)=>{
    sum = x-y;
    if(sum){
      resolve(sum)
    }else{
      reject(Error("Could not subtract the two values"))
    }
  })

}

//Promise chain
add(3,7)
.then((added)=>{
  return subtract(added,2);
})

.then((subtract)=>{
  return add(subtract,2)
})

.then((subtract)=>{
  return add(subtract,20)
})

.then((added)=>{
  return subtract(added,10);
})
.then((result)=>{
  window.alert(`Result: ${result}`);
})

.catch((err)=>{
  window.alert(err)
});
