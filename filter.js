const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num)=> num>4 ) // callback function is used here
//console.log(newNums); // filter create new array


// if i used scope {} then write return keyword
//const newNums = myNums.filter( (num)=> {
 ///  return num>4
//} )
//console.log(newNums);


// for each loop example
const newNums = []
myNums.forEach( (num) =>{
    if (num > 4) {
        newNums.push(num)
        
    }
} )
console.log(newNums);

