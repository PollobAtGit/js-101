
function print(msg) {
    console.log(msg);
}

function Person(name) {

    //POI: If 'this' were NOT specified, a GLOBAL variable 'name' would have been declared
    //POI: If 'var' were defined, name would have been a local variable
    this.name = name;
}

//POI: Easy approach to define multiple properties as prototype
Person.prototype = {
    sayName: function () { return this.name; },
    toString: function () { return "My Name Is: " + this.name; }
}

var aPerson = new Person("NICOLAS");
var anotherPerson = new Person("JAKAS");

print(aPerson.sayName());
print(aPerson.toString());

print(anotherPerson.sayName());
print(anotherPerson.toString());

//POI: Both of the instances of Person share the same properties
print(aPerson.sayName === anotherPerson.sayName);//true
print(aPerson.toString === anotherPerson.toString);//true
print(aPerson.sayName === anotherPerson.toString);//false

// -------------------------- CAVEAT WITH  ABOVE APPROACH ---------------------

function Human(name) {
    this.name = name;
}

var aHuman = new Human("MOBIN");
var anotherHuman = new Human("KABIR");

print(" --------------------- OPERATION ON HUMAN CTOR ------------------------ ");

//POI: 'constructor' refers to the CONSTRUCTOR (FUNCTION)
print(aHuman.constructor);//[Function: Human]
print(aHuman.constructor === Human);//true

print(anotherHuman.constructor === Human);//true
print(aHuman.constructor === anotherHuman.constructor);//true

print(" --------------------- OPERATION ON PERSON CTOR ------------------------ ");

//POI: 'constructor' DOESN'T refer to the CONSTRUCTOR (FUNCTION) rather some OTHER OBJECT
//POI: 'constructor' property has been OVERRIDDEN
print(aPerson.constructor);//[Function: Object]

//POI: 'constructor' DOESN'T even refer to the CONSTRUCTOR FUNCTION
print(aPerson.constructor === Person);//false
print(anotherPerson.constructor === Person);//false

print(anotherPerson.constructor === aPerson.constructor);//true

// -------------------------- ALL functions has a constructor property ---------------------

print(" -------------- ALL FUNCTIONS HAS A CONSTRUCTOR PROPERTY ---------------------- ");

//POI: EVERY JS function has a 'constructor' property
print(print.constructor);//[Function: Function]
print(new print("DUMMY DATA").constructor);//[Function: print]

// -------------------------- AVOID THE CAVEAT ---------------------

print(" -------------- AVOID THE CAVEAT ---------------------- ");

function Mobile(modelNumber) {
    this.modelNumber = modelNumber;
}

Mobile.prototype = {
    constructor: Mobile,
    sayModelName: function () { return this.modelNumber; },
    toString: function () { return "I Am A " + this.modelNumber; }
}

var aMobile = new Mobile("X-256");

//POI: 'constructor' DIDN'T return an object even though using object literal, Mobile's 'prototype' has been set
print(aMobile.constructor);//[Function: Mobile]

//POI: constructor DOES refer to the same constructor (Function)
print(aMobile.constructor === Mobile);//true

//POI: Mobile instance's constructor is NOT an object
print(aMobile.constructor === Object);//false

//POI: Person instance's constructor IS AN OBJECT
print(aPerson.constructor === Object);//true
