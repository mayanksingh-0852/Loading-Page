// Immediately Invoked Function Expressions (IIFE)


(function coffe (){
    // Named IIFE
    console.log("DB Connect");
    
})();

((name)=>{
    // Simple IIFE
    console.log(`DB connected ${name}`);
    
})("Mayank");