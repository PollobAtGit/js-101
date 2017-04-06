
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

//POI: Evaluation of 'jane' will show nothing indicating it has no own property. That doesn't mean
//'anotherJane' has no prototype. In fact by definition, it's has a prototype 'Object' & in that case,
//jane.
print(anotherJane);//{}

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

//POI: Works the same as 'Object.getPrototypeOf'
//POI: __proto__ is being used as getter
print(anotherJane.__proto__);
print(jane.__proto__);//{}

var anotherObj = {

    //POI: __proto__ can be used as setter too. Old approach had no way to set property this way
    __proto__: jane
};

print(anotherObj);

anotherObj.describe = function() {

    //POI: name key is defined in 'prototype' but 'age' isn't defined yet
    return this.name + "\t" + this.age;
}

//POI: Evaluation operation will print only 'anotherObj' objects OWN properties not the inherited ones
print(anotherObj);

print(anotherObj.describe());