

function sayMyName(){
console.log("M");
console.log("A");
console.log("Y");
console.log("A");
console.log("N");
console.log("K");
}

// sayMyName()

// function addTwoNum (number1 ,number2){
//     console.log(number1 + number2);
// }
function addTwoNum (number1 ,number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNum(145 , 3345)
// console.log(result);

function loginUser(username = "Riya"){
    if(username === undefined){
        console.log("plz enter a username");
        return
        
    }

    return  `${username} just loged in`
}
// console.log(loginUser());

function calculateAdd (...num1){
    return num1
}
// console.log(calculateAdd(100,123,333.4));


const user = {
    name: "Mayank",
    age: 25,
    addresh: "Delhi"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and the age is ${anyobject.age} or addresh ${anyobject.addresh}`);
    
}
// handleObject(user)
