//1. avoid multile if,else if
function getPrice(item){
    if(item==='Burger')
      return 200;
    else if(item==='pizza')
      return 500;
      else if(item==='joice')
      return 300;
}
console.log(getPrice('Burger'))

//=> Refactor
const foodMap={
    Burger:200,
    pizza:500,
    joice:300
}
// console.log(foodMap['Burger'])
  function getPrice(item){
    return foodMap[item];
  }
  console.log(getPrice('Burger'))

// const foodMap1= Object.keys(foodMap); // Convert the Object to an array of key
let entries=Object.entries(foodMap); // Convert the object to an array of key-value pairs
for(let [key,value] of entries){
   console.log(`${key}: ${value}`);
}

//2. avoid multile OR || OR
const canAccess=(userRole)=>{
    if(userRole==='admin' || userRole==='editor' || userRole==='manager')
       return true;
    else
      return false;
}
console.log(canAccess('admin'))

//=>Refactor
 const canAccess1=(userRole)=>{
    const allowedRoles=['admin','editor','manager'];
    return allowedRoles.includes(userRole);
 }
 console.log(canAccess('user'))

//3.swap two value in javascript
let a=3;
let b=4;
console.log(`before swap ${a}, ${b}`);
let temp=a;
a=b;
b=temp;
console.log(`after swap ${a}, ${b}`);

//=> Refactor
let a1=3;
let b1=4;
console.log(`before swap ${a}, ${b}`);
[a,b]=[b,a];
console.log(`after swap ${a}, ${b}`);

