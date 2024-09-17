const birthYear = 2000;
const currentYear = 2024;
const favoriteNumber = 21;


let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
let isAdult =  ageOfPerson >= 18;

if (isChild) {console.log("You are a child.");}
if (isTeenager) {console.log("You are a teenager.");}
if (isAdult) {console.log("You are an adult.");}

console.log(favoriteNumber);

if (favoriteNumber > ageOfPerson) { console.log("Favorite Number is Greater");}

else if (favoriteNumber === ageOfPerson) {console.log("They are the same!")}

else if (favoriteNumber % 2 === 0) {console.log("Favorite Number is Even");}
else {console.log("Favorite Number is Odd");}
