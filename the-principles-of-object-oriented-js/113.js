
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