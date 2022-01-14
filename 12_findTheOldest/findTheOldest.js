const findTheOldest = function(x) {

    const oldest = x.reduce(function(per1, per2) {
        
        if(!per1.yearOfDeath){
            per1.yearOfDeath = new Date().getFullYear();
        }
        else if(!per2.yearOfDeath){
            per2.yearOfDeath = new Date().getFullYear();
        }
        const person1 = per1.yearOfDeath - per1.yearOfBirth;
        const person2 = per2.yearOfDeath - per2.yearOfBirth;
        if(person1 > person2){
            
            return(per1);
        }
        else { 

            return(per2);
        }
            


    });
        


    return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
