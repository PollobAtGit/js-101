
'use strict'

function print(msg) {
    console.log(msg);
}

var person = {
    name: 'PERSON'
}

var jane = {
    __proto__: person
}

var anotherJane = {
    __proto__: person
}

//POI: 'getPrototypeOf' may be returns the reference to the original object. So 'Object.getPrototypeOf' will
// return the original object
print(Object.getPrototypeOf(jane) === person);

print(jane.name);
print(anotherJane.name);

//POI: anotherJane is EMPTY because it has no own property
print(anotherJane);//{}

//POI: A New property 'name' will be introduced in the object that will shadow/override the prototype property
anotherJane.name = 'ANOTHER JANE';

//POI: anotherJane is not empty any more. It has a own property 'name' that will override value of prototype property
print(anotherJane);

print(anotherJane.name);
print(jane.name);

//POI: This will have no impact on anotherJane but will have impact on jane because anotherJane has a own
//property that hides the prototype 'name' property
person.name = 'JANE';

print(jane.name);
print(anotherJane.name);