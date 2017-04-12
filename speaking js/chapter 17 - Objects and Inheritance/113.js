
'use strict'

function print(msg) {
    console.log(msg);
}

//POI: The first parameter is the object on which to add/modify property
var proto = Object.defineProperties({}, {
    protoEnumTrue: { value: 1, enumerable: true },
    protoEnumFalse: { value: 2, enumerable: false }
});

var obj = Object.create(proto, {
    objEnumTrue: { value: 1, enumerable: true },
    objEnumFalse: { value: 1, enumerable: false }
});

//POI: Object.keys returns enumerable & own properties
print(Object.keys(obj));

//POI: Object.getOwnPropertyNames will return all (enumerable & non-enumerable) own properties
print(Object.getOwnPropertyNames(obj));

var enumerableProperties = []

//POI: 'in' will climb up the ladder but will access only enumerable properties. Makes sense because for-in enumerates
for (var key in obj) {
    Array.prototype.push.call(enumerableProperties, key);
}

print(enumerableProperties);

//POI: enumerability of an object has impact only on 'Object.keys' & 'for-in'. Not in 'in' keyword.
// Independent usage of 'in' is almost using 'Object.getOwnPropertyNames' for each object in prototype chain
print('protoEnumFalse' in obj);//true
print('objEnumFalse' in obj);//true

function returnAllPropertiesInPrototypeChain(obj) {
    var objInstance = Object.create(obj);
    var objProperties = [];

    while (objInstance) {
        var propertyNames = Object.getOwnPropertyNames(objInstance);
        print(objInstance);
        // print(propertyNames);
        for (var key in propertyNames) {
            Array.prototype.push.call(objProperties, key);
        }
        objInstance = Object.getPrototypeOf(objInstance);
    }

    return objProperties;
}

returnAllPropertiesInPrototypeChain(obj);
//print(returnAllPropertiesInPrototypeChain(obj));