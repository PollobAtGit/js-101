//Constructor
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

console.log("She is " + sally.age);
console.log("He is " + holden.age);