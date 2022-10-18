const myAge = 13; // my age

let earlyYears = 2; // the first two years of a dog's life

earlyYears *= 10.5; // the first two years of a dog's life count as 10.5 dog years each
console.log(earlyYears);

let laterYears = myAge - 2; // first two years accounted for
console.log(laterYears);

laterYears *= 4; // after the first 2 years, each year equates to 4 dog years
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; // my age in dog years
console.log(myAgeInDogYears);

const myName = "TSUNAMI".toLowerCase(); // my name in lowercase
console.log(myName);

// Step 9

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
); // String interpolation
