// Creating a promise
let orderPizza = new Promise((resolve, reject) => {
    let isPizzaAvailable = true; // Change this to false to test rejection
  
    if (isPizzaAvailable) {
      resolve("Pizza is ready!");
    } else {
      reject("Sorry, no pizza today.");
    }
  });
  
  // Using the promise
  orderPizza
    .then((message) => {
      console.log(message); // Runs if the promise is fulfilled
    })
    .catch((error) => {
      console.log(error); // Runs if the promise is rejected
    });
  