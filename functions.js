function mySum(number1, number2){
    //console.log(number1 + number2);
    
}

mySum(3,4)

function myCar(){
    console.log("It is my car")
}
myCar()

// if we decalre a varibale in function then we cant use outside the function
///let myCar = "Umair bhai ki car"
//console.log(myCar);

function userLogged(username){
    return `${username} just logged in`
}      
userLogged("Umair")

function cartPrice(...num1){   // rest operator
    return num1
}
console.log(cartPrice(200,400,600,8000,1000));

/*const myValue={
    name: "Asad bhai",
    price: 199
}*/
function getValue(myValue){
    return myValue
}
console.log({
    name: "Asad bhai",
    price: 199
});

console.log(addone(10));

function addone(num){
    return num+1
}

const addTwo = function(num){
    return num + 2
}
addTwo(12)