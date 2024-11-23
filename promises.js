const promisOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout (function(){
        console.log('Asyn task is completed');
        resolve();
        
    }, 3000)
}) 

// consuming
promisOne.then(function(){
    console.log("Promise is consumed");
    
})


// Second way for creating and consuming promises.

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Hello Umair bhai");
        resolve()
        reject()
        
    }, 2000)
}).then(function(){
    console.log("Async 2 resolved");
    })

// Another way of accessing promises 
const myobj = {
    user: 'umair',
    id: 'ansari.com',
    mob: 9657557443
}
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({myobj}
            
            /*['Superman', 'Batman', 'Iron Man', 'Captain America']*/) // we can take data as object as well
    }, 1000)
}).then(function(heroes){
    console.log(heroes);
})

// Another way of promises

const promiseFour = new Promise(function(resolve, reject){
     setTimeout(() =>{
        let error = true
        if (!error) {
            resolve({username: 'Umair', id:"1234"})
            
        }else{
            reject('Error: Something went wrong')
        }
     },2000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch((error) =>{
    console.log(error);
}).finally(() =>{   // by defalut run hota hi hai
    console.log("Finally the promise eather resolve or rejected");
    
})



// promises 5 example

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() =>{
        let error = true
        if (!error) {
            resolve({username: 'Asad bhai', id:"1234"})
            
        }else{
            reject('Error: Asad went wrong')
        }
     },2000)
})  

async function consumepromiseFive()  {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumepromiseFive()


// Promises 