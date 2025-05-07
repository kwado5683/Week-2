//objects can contain functions as values with corresponding key

const person = {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
    sayHello: function(){
        console.log("Hello!");
    },
};
//eg2 
const person1 = {
    name: "tina",
    age: 40,
    favouriteColour: "green",
    getAge: function(){
        return this.age;
    },
};

const whatage = person1.getAge();

console.log(whatage);