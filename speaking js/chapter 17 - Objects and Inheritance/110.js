
'use strict';

function print(msg) {
    console.log(msg);
}

var jane = {
    name: 'JANE',
    describe: function() {
        return this.name;
    }
}

print(jane.describe());

//POI: Object.create will set the passed parameter as the prototype of 'anotherJane'
var anotherJane = Object.create(jane);

//POI: anotherJane inherited property 'describe' from 'jane'
print(anotherJane.describe());

//POI: This will return the object definition. Not the name of the object. 'jane' in this case
print(Object.getPrototypeOf(anotherJane));

//POI: Object.keys return only own property
print(Object.keys(anotherJane));

anotherJane.anotherDescribe = function() {

    //POI: At this stage 'age' is not defined for 'anotherJane' nor does it exist in prototype
    return this.age;
}

print(anotherJane.anotherDescribe());//undefined

anotherJane.age = 20;

print(anotherJane.anotherDescribe());

//POI: 'isPrototypeOf' is in prototype of Object. So 'jane' has that property too
//POI: Syntax: prototypeName.isPrototypeOf(inheritedObjName)
print(jane.isPrototypeOf(anotherJane));//true

function getDefiningObject(objToCheck, key) {

    //POI: This ensures we are checking on objects rather than on raw Number, String etc. If we
    // get raw types that will be converted to objects. Also Object.
    var obj = Object.create(objToCheck);

    //POI: 'hasOwnProperty' returns that objects properties only not of the inherited ones
    while(obj && !obj.hasOwnProperty(key)) {
        obj = Object.getPrototypeOf(obj);
    }
    return obj;
}

print(getDefiningObject(anotherJane, 'age'));
print(getDefiningObject(anotherJane, 'name'));
