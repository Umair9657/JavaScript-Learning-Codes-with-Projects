const user = {
    fullname: "osman bey son of ertugrul",
    empire: "Empire osman",
    year: 1776,
    sonof: function (params) {      
        console.log(`${this.fullname}, this is keyword magic`);
        
        
    }
    
}
user.sonof()

//Simple arrow function
const user1=(a,b) =>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    return a+b;
}
console.log(user1(5,6));
