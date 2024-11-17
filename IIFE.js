(function one (){   // Named IIFE
    console.log(`DB CONNECTED`);
    
})();

((name) => { // Simple IIFE
    console.log(`DB ALSO CONNECTED ${name}`);
    
})("Umair");                                     