for (let i = 0; i < 5; i++){
    console.log("iteration", i);
}

//looping over arrays
const foods = ["pizza","chocolate","ice cream","cheese"];
for (let i = 0; i < foods.length; i++){
    console.log(foods[i]);
}

//second type of for loop
//for ..of

const foodMenu = ["pizza","chocolate","ice cream","cheese"];
for (let food of foodMenu) {
    console.log(food)
}

//3rd type of loop
//forEach

const favFood = ["pizza","chocolate","ice cream","cheese"];
favFood.forEach(function(food) {
    console.log(food);
});

//with index

const myFood = ["pizza","chocolate","ice cream","cheese"];
myFood.forEach(function(myfood,index) {
    console.log(index,myfood);
});

//workshop....................
const Favanimal = ["dog","cat","goat","parrot"];
for (i = 0; i < Favanimal.length; i++) {
    console.log(Favanimal[i],i);
}

//favcolors.........
const favColors = ["yellow","red","green","black"];
for(let color of favColors) {
    console.log(color);
}

//favnumbers...........
const favNumbers = [2,3,4,8,9,7,67,87,23];
favNumbers.forEach(function(number){
    console.log(number);
});