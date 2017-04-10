
'use strict'

function print(msg) {
    console.log(msg);
}

var jane = {
    name: 'JANE',
    describe: function () {
        return this.name;
    }
}

print(jane.describe());

var anotherJane = Object.create(jane);

print(anotherJane.describe());

//POI: Deletion will have no impact on anotherJane because describe is not a own property
//QRY: Return value will be 'true'. Why?
var isSuccessForAnotherJane = delete anotherJane.describe;

print(isSuccessForAnotherJane);

//POI: anotherJane will be evaluated. But 'name' or 'describe' will not be printed in console because they
//are not anotherJane's own property but inherited property from jane
print(anotherJane);

//POI: jane has 'name' and 'describe' as own property. So they will be printed in console
print(jane);

print(anotherJane.describe());

//POI: Deletion will have impact on object 'jane' because 'name' is a own property of 'jane'
//POI: This will have impact on 'anotherJane' too because jane is the prototype of anotherJane
var isSuccessForJane = delete jane.name;

print(isSuccessForJane);

print(jane.describe());
print(anotherJane.describe());

//POI: Object.keys returns all own property. So in this case 'describe' will be listed
print(Object.keys(jane));
print(Object.getOwnPropertyNames(jane));

//POI: anotherJane inherits 'jane' & no own property has been defined. So it will not list any keys
print(Object.keys(anotherJane));
print(Object.getOwnPropertyNames(anotherJane));

var keys = [];

//POI: 'in' goes up in prototype chain. So every key will be accessed when iterating through 'in'
for(var key in anotherJane) {
    //QRY: Is there a reason why this approach is a better one except the obvious one?
    Array.prototype.push.call(keys, key);
}

print(keys);

//POI: 'in' keyword in loop or in case of independent usage climbs up the prototype chain
print('describe' in anotherJane);
print('name' in anotherJane);

//POI: This is not a better approach because 'jane' object might have an property naming 'hasOwnProperty'
print(jane.hasOwnProperty('describe'));

//POI: This is a much better approach because here we are ensuring 'hasOwnProperty' will be invoked
// by looking up in property. This should be a best practice in every JS code base
print(Object.prototype.hasOwnProperty.call(jane, 'describe'));

//POI: This works also even though the first 'jane' is redundant
//POI: Any custom object's prototype can be accessed using '__proto__'
print(jane.__proto__.hasOwnProperty.call(jane, 'describe'));
