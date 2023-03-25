//1.
function isEligible(age){
    if(age>=18)
     return true;
     else 
     return false;
}
//=>Refactor
function isEligible(age){
    // return age>=18;
     return age>=18?true:false;
}
console.log(isEligible(19))

// wait for seven second
function waitForSevenSecond(){
    let ms=7000+ new Date().getTime();
    while(new Date()<ms){};
}
waitForSevenSecond()
console.log("Binod");

// to convert to array
function testOne(){
    let args=Array.from(arguments)
    console.log(args)
 }
 testOne(1,2,3,4,5,3,5)