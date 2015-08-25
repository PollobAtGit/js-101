//When function is used as constructor then 'this.(.*)' '\1' indicates new property
//to be created for the object.
function Person(name,age) {
    this.name = name;
    this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);

console.log(george);

//Without 'this' the following function don't work properly as constructor.
function Person(name, age) {
    ame = name;
    ge = age;
}

var bob = new Person("Bob Smith", 30);
console.log(bob);