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
## 8. Question
``` javascript
function show(){
    for(var i=0;i<4;i++){
        setTimeout(()=>{
           console.log(i)
        },2000)
    }
}
show() // output 4 4 4 4
```
> **Explain**
1. The show() function is called.
2. The for loop initializes i to 0.
3. Inside the loop, the setTimeout function is called for each iteration.
4. The callbacks are scheduled to execute after a 2-second delay.
5. The loop continues, incrementing i to 1, 2, and 3.
6. The loop ends when i becomes 4.
7. After 2 seconds, the first callback is executed and prints 4 to the console.
8. Similarly, after 2 seconds, the remaining callbacks are executed and also print 4 to the console.

``` javascript
// solution
function show() {
  for (var i = 0; i < 4; i++) {
    (function (num) {
      setTimeout(function () {
        console.log(num);
      }, 2000);
    })(i);
  }
}

show(); 
```
## 9.Question
```javascript
function show(){
    for(let i=0;i<4;i++){
        setTimeout(()=>{
           console.log(i)
        },2000)
    }
}
show(); //output 0,1,2,3

```
> **Explain**
1. The show() function is called.
2. The for loop initializes i to 0 and checks the condition i < 4.
3. Inside the loop, the setTimeout function is called for each iteration.
4. The callbacks are scheduled to execute after a 2-second delay.
5. The loop continues, incrementing i to 1, 2, and 3.
6. For each iteration, the callback captures the value of i at that specific iteration because let creates a new block scope.
7. After 2 seconds, the first callback is executed and prints 0 to the console.
8. Similarly, after 2 seconds, the remaining callbacks are executed and print 1, 2, and 3 to the console, respectively.

