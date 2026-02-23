const user  = {
    username: "Mayank",
    price: 999,

    welcomeMassage:function(){
        console.log(`${this.username} welcome to website`)
        // console.log(this);
        
    }

}

// user.welcomeMassage()
// user.username = "Riya"
// user.welcomeMassage()
// console.log(this);

// -------------------------------------------------------------------------

// function coffe(){
//    let username = "Mayank"
//     console.log(this);
    
// }
// coffe()
// ----------------------------------------------------------------------------
// const coffe = function(){
//     let username= "Mayank"
//     console.log(this.username);
    
// }
// coffe()
// ---------------------------------------------------------------------------
const coffe = ()=>{
    let username= "Mayank"
    console.log(this.username);
    
}
// coffe()
// ------------------------------------------------------------------------
// const addTwo = (num1,num2) =>{
//     return num1+num2   
// }
const addTwo = (num1,num2) =>{
    return num1+num2   
}
console.log(addTwo (20,20));
// ---------------------------------------------------------------------------------