
function print(msg) {
    console.log(msg);
}

//POI: Given EMPTY object is created with object literal notation. This objects are called generic object
var prototype = Object.getPrototypeOf({});

print(prototype === Object.prototype);//true

//POI: Object ITSELF has a prototype & that is an EMPTY object
print(Object.prototype);//{}

print(Object.prototype.isPrototypeOf.call(Object.prototype, {}));//true

//TODO: Makes sense, still investigate more
print(Object.prototype.isPrototypeOf.call({}, Object.prototype));//false

var oneObj = { name: "JOHN" };

//POI: Note the distinction. There's a difference between '{}' & Object.prototype
print(Object.prototype.isPrototypeOf.call({}, oneObj));//false
print(Object.prototype.isPrototypeOf.call(Object.prototype, oneObj));//true

var anotherObject = Object.create(oneObj);

print(Object.prototype.isPrototypeOf.call(oneObj, anotherObject));//true

//POI: Similar to any standard OOP language. Animal is prototype/base class of both Cat & Dog
print(Object.prototype.isPrototypeOf.call(Object.prototype, anotherObject));//true

//TODO: Confusing. {} & Object.prototype is NOT the same. Then why both returns true
print(Object.prototype.isPrototypeOf({}, anotherObject));//true

// ------------------ OVERRIDE PROPERTY IN CHAIN BY OWN PROPERTY ------------------------------

var anObject = {};

//POI: This will ENUMERATE the property list
print(anObject);
print(anObject.toString());

anObject["toString"] = "[Custom Custom]"

//POI: Illustrates one particularly dangerous scenario, one function has been replaced by another METHOD
print(anObject.toString);//[Custom Custom]

//POI: Best practice is to access prototype property using 'prototype' of THAT object

print(Object.prototype.toString.call(anObject));//[Object Object]
print(Object.getPrototypeOf(anObject));//{}

//POI: 'delete' works ONLY ON OWN property
delete anObject["toString"];

print(anObject.toString);//[Function: toString]
print(anObject.toString());

print("\n----------------------------------\n")

//TODO: Why not Object?
print(typeof anObject.toString);//[function]
print(anObject.toString instanceof Function);//true
print(anObject.toString instanceof Object);//true

print("\n----------------------------------\n")

//POI: Generic objects (created using literal notation) DOESN'T have a 'prototype' property
print(anObject.prototype === undefined);//true

//POI: Object.prototype is the prototype of '{}'. So it has access to 'Object.prototype' s properties
print(Object.getPrototypeOf(anObject).toString.call(anObject));

//ACT: Risky operation if NOT INTENTIONAL becaue 'anotherObject' has a prototype which defines a 'name' property
anotherObject["name"] = "NICHOLAS";

/*
    TODO: If 'Object.prototype' is the prototype for all GENERIC objects than shouldn't ALL GENERIC have
    it have the 'prototype' property?
*/

//POI: 'anotherObject' is created using 'Object.create'. So it HAS a prototype but that is not accessible via
//'prototype' property. That doesn't exist
print(anotherObject.prototype === undefined);//true

//ALT: To ensure we access the ORIGINAL property, we can use getPrototypeOf from Object
print(Object.getPrototypeOf(anotherObject)["name"]);
