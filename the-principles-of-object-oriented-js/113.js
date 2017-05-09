
function print(msg) {
    console.log(msg);
}

//POI: Objects created with this constructor (function) will not be called GENERIC objects
//But objects created using object literal are called GENERIC objects
function Person() {

}

var person = new Person();

//POI: Because of the fact that 'Person' constructor doesn't require any arguments, one instance of 'Person'
//class can be created without specifying any parenthesis
var anotherPerson = new Person;

print(person instanceof Person);//true
print(person instanceof Object);//true

print(anotherPerson instanceof Person);//true
print(anotherPerson instanceof Object);//true

//POI: Following two are functionally equivalent but 'obj' is an GENERIC object
var obj = {};

//POI: This object instance is NOT a GENERIC object
var justAnotherObj = new Object();

print(obj instanceof Object);//true
print(justAnotherObj instanceof Object);//true

//POI: Object's 'constructor' property REFERS (POINTS) to the constructor (function) that has been used to
//create the instance
print(person.constructor);

//POI: Following proves the reference in the 'constructor' property is the same the original function
print(person.constructor === Person);//true
print(anotherPerson.constructor === Person);//true

//POI: Both refers (points) to the same constructor (function)
print(anotherPerson.constructor === person.constructor);//true

function Car(model) {
    this.model = model;
    this.sayModelName = function () {
        return Array.prototype.join.call(["This Car's Model Is", this.model], " ");
    }
}

var carInstance = new Car("MOS89");

print(carInstance.model);
print(carInstance.sayModelName());

var anotherCarInstance = new Car("MOS0007");

print(anotherCarInstance.model);
print(anotherCarInstance.sayModelName());

// ------------------ CTOR WITH RETURN STATEMENT -----------------------------/

function Printer(model) {
    this.model = model;
    this.sayModelName = function () {
        return Array.prototype.join.call(["This Printer's Model Is", this.model], " ");
    }

    //POI: This is totally valid (may be advisable?). This will work properly as long as the returned value
    //is an instance of 'Object'
    return this;
}


//POI: Returned object is of 'Printer' type
var printer = new Printer("MOS1107");

print(printer.model);
print(printer.sayModelName());


function Album(capacity) {
    this.capacity = capacity;
    this.sayCapacityCount = function () {
        return Array.prototype.join.call(["This Album's Capacity Is", this.capacity], " ");
    }

    //POI: This return will not have any impact on any 'Album' instance because the rule is if the returned
    //value is not an instance of 'Object' i.e. of primitive type then compiler will IGNORE the return
    //statement
    return 0;
}

//POI: The instance will be properly instantiated
var album = new Album(10);

print(album.capacity);
print(album.sayCapacityCount());

function IdCard(number) {
    this.cardNumber = number;

    //POI: This returned value is an instance of 'Object' (NOT primitive) so this return statement WILL NOT
    //BE IGNORED (modular pattern levarages this technique)

    return {
        cardNumber: null
    };
}

var idCard = new IdCard("10");

//POI: 'cardNumber' is not defined in the returned object. So 'null'
print(idCard.cardNumber);//null

