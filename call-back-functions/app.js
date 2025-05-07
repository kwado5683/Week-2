//callback function is a function given as an argument to another function or method.
// callback function has no name otherwise anonymous
// it can't be called, but depends on another function or method to work.


//logs a string to the console to tell the user the function was called 
function notifyUser(){
    console.log("notifyUser function was called");

}

//accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(nofifyUser) {
    console.log("Running myAwesomeFunction...doing complex tasks..");
    console.log("Complex task complete. I will notify the user");
    notifyUser();
}

myAwesomeFunction(notifyUser);

//example 2

function add (a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

//using callback function

function mycalculation(a,b,operationCallback){
    console.log("doing a calculation using the numbers:", a, b);
    console.log("we might have a code that save the result to a log or database");
    return operationCallback(a,b);
}

let result = mycalculation(2,3,add);
console.log(result)


//workshop.............................
function compare(a , b){
    if (a > b){
        return `${a} greater than ${b}`;
    } else {
        return `${a} less than ${b}`;
    }
}
const hit = compare(6,10);
console.log(hit);

// function compare(a, b) {
//     if (a > b) {
//         return `${a} is greater than ${b}`;
//     } else {
//         return `${a} is not greater than ${b}`;
//     }
// }

// const hit = compare(6, 3);
// console.log(hit); // This will log "6 is greater than 3"
