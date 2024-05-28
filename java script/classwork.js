// 1. Positive or Negative
// Create a program that checks if a number stored in a variable is positive or negative. 
// Log "The number is positive" if it's greater than zero, otherwise log "The number is negative."


let number = 22;

if (number % 2 === 0) {
    console.log(number + " is even");
} 
    else {
    console.log(number + " is odd");
}



// 4. Basic Discount System
// A shop offers a discount for purchases over $50. 
// Write a program where the total purchase amount is stored in a variable. 
// If the amount is over $50, calculate the discount and log it. Otherwise, log "No discount available."


let dollars = 85;

if (dollars >= 50 ) {
    console.log(dollars * .85)
}
    else {
    console.log("No discount available")
}


let dollarss = 85;
const discount = .85;

if (dollars >= 50 ) {
    console.log(dollarss * discount)
}
    else {
    console.log("No discount available")
}





for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 ===0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 ===0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
}



const userInput = prompt("Enter a string");

if (userInput.length < 4) {

} else {
    let result = "";
    for (let i = 3; i < userInput.length; i++) {
        //console.log(userInput[i])
        result += userInput[i];
    }
    console.log(result);
}




let userGuess = prompt("Guess a number between 1-10")
let guesses = 0;
// math.floor rounds down as math.random can be decimal * by maximum and add 1 so it cant be 0
const randomNumber = Math.floor(Math.random() * 10 + 1); 

while (userGuess != randomNumber) {
    guess++;
    userGuess = prompt("Wrong number, try again");
    
}

alert(`You got it! It took you ${guesses} tries`);




let counter = -1;
let result;

while (result !== "heads") {
    let coin = Math.random();

    if (coin > .5) {
        result = "heads";
    } else {
        result = "tails";
    }
    count++;
}

console.log(`It took ${count} tries to get heads!`)




const userName = prompt("Enter your name")
const userNumber = prompt("Enter a number between 1 and 100")
const ourName = "Scott"

if (userNumber % 2 === 0) {
    console.log(userNumber + " is even");
} 
    else {
    console.log(userNumber + " is odd");
}

if (userNumber > 50) {
    console.log("Your number is greater than 50")
} else {
    console.log("Your number is less than or equal to 50")
}

for (let i = 1; i <= userNumber; i++) {
    console.log(i)
}
for (let i = 100; i > userNumber; i--) {
    console.log(i)
}

if (userName === ourName) {
    alert("Great Name");
}







function absoluteValue(number){
    if(number >= 0){
        return number;
    } else {
        return number * -1;
    }
}

// 2nd way
// return number >= 0 ? number : number * -1;

//3rd Way
//if (number >=0) return number;
//if (number <0) return number * -1;

//prototypical
//return Math.abs(number);


const rightTriangle = (a, b, c) => {
    if(a * a === b * b + c * c) {
        console.log("it is a right triangle")
    } else {
        console.log("it is not a right triangle")
    }
}

rightTriangle (30,20,10)



//DOM = document object model

//let div1 = document.getElementById("div1");
//    div1.style.height = "100px";



const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => userSelect("rock"));
paperButton.addEventListener("click", () => userSelect("paper"));
scissorsButton.addEventListener("click", () => userSelect("scissors"));

function userSelect(option) {
    console.log(option)
}















