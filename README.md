## 1.avoid multiple if else 
 ``` javascript
function getPrice(item){
    if(item==='Burger')
      return 200;
    else if(item==='pizza')
      return 500;
      else if(item==='joice')
      return 300;
}
console.log(getPrice('Burger'))
```
>refactor
``` javascript
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
  ```

## 3.avoid multile OR || OR
``` javascript
const canAccess=(userRole)=>{
    if(userRole==='admin' || userRole==='editor' || userRole==='manager')
       return true;
    else
      return false;
}
console.log(canAccess('admin'))
```
>Refactor
``` javascript
 const canAccess1=(userRole)=>{
    const allowedRoles=['admin','editor','manager'];
    return allowedRoles.includes(userRole);
 }
 console.log(canAccess('user'))
 ```
## 4.swap two value in javascript
``` javascript
let a=3;
let b=4;
console.log(`before swap ${a}, ${b}`);
let temp=a;
a=b;
b=temp;
console.log(`after swap ${a}, ${b}`);
 ```
>Refactor
``` javascript
let a1=3;
let b1=4;
console.log(`before swap ${a}, ${b}`);
[a,b]=[b,a];
console.log(`after swap ${a}, ${b}`);
```


## 5. make short
``` javascript
function isEligible(age){
    if(age>=18)
     return true;
     else 
     return false;
}
```
>Refactor
```javascript
function isEligible(age){
    // return age>=18;
     return age>=18?true:false;
}
console.log(isEligible(19))
```
## 6. wait for seven second
``` javascript
function waitForSevenSecond(){
    let ms=7000+ new Date().getTime();
    while(new Date()<ms){};
}
waitForSevenSecond()
console.log("Binod");
```
## 7. Convert to Array
```javascript
function testOne(){
   let args=Array.from(arguments) //Array.form() method
   console.log(args)
}
testOne(1,2,3,4,5,3,5)
```