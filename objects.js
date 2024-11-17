// Object declare by objects literal (key value pair)

const myDetails ={
    name: "Umair Bhai",
    std: 12,
    id: 'ansari@google.com',
    school: "SND"

}

console.log( typeof myDetails.std);

// Empty JavaScript object, and then adds 3 properties:
const cars = {}; // object create

cars.name="BMW"       
cars.number= 25687
cars.model = "BMW-2356" 

console.log(typeof cars.model);


// object declare by new object() keyword.

const person = new Object()
person.firstname = "Umair"
person.latsname = "Ansari"

console.log(typeof person.firstname)


// Copy of object JavaScript Objects are Mutable
//Objects are mutable: They are addressed by reference, not by value.
const webSeries= new Object();
webSeries.name= "Farzi"
webSeries.director= "Umair bhai"
webSeries.actor = "Shahid Kapoor"

//Object.freeze(webSeries)

console.log(webSeries);

const movie=webSeries
webSeries.actor="Salman Khan"

console.log(webSeries);

console.log(Object.keys(myDetails));
console.log(Object.values(myDetails));
console.log(Object.entries(myDetails));
console.log(myDetails.hasOwnProperty('school'));


   


