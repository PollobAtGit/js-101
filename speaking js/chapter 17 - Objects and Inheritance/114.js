
'use strict';

function print(msg) {
    console.log(msg);
}

/*********** Get all own enumerable properties using hasOwnProperty ******************/

function getAllOwnProperties(obj) {
    var properties = [];

    //POI: Will climb up the ladder of prototype chain to get all enumerable properties
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            Array.prototype.push.call(properties, key);
        }
    }

    return properties;
}

//POI: Defining no prototype. Using Object.create is a over-kill here because no prototype is being defined.
//Other possible options are using object literal or using Object.defineProperties()
var obj = Object.create({}, {
    objEnumTrue: { value: 1, enumerable: true },
    objEnumFalse: { value: 1, enumerable: false }
});

print(getAllOwnProperties(obj));

/*********** ForEach on Object.keys ******************/

var properties = [];
Object.keys(obj).forEach(function (key) {
    Array.prototype.push.call(properties, key);
});

print(properties);

/**
 * Iterate Over All (regardless of enumerability & considering prototype chain)
 * Keys To Get Corresponding Values
 */

function getAllPropertiesAndCorrespondingValuesFromPrototypeChain(obj) {
    var objProperties = [];

    //POI: Will ensure we will not get to the base Object object
    while (Object.getPrototypeOf(obj) !== null) {

        var tmpObj = {};

        Object.getOwnPropertyNames(obj).forEach(function (key) {
            //POI: It's better to use bracket notation because this function can not ensure that the input object was not created with bracket notation. Which means some keys might need bracket to access data properly
            tmpObj[key] = obj[key];
        });

        Array.prototype.push.call(objProperties, tmpObj);
        obj = Object.getPrototypeOf(obj);
    }

    return objProperties;
}

var proto = Object.defineProperties({}, {
    protoEnumTrue: { value: 1, enumerable: true },
    protoEnumFalse: { value: 2, enumerable: false }
});

var anotherObj = Object.create(proto, {
    objEnumTrue: { value: 1, enumerable: true },
    objEnumFalse: { value: 1, enumerable: false }
});

print(getAllPropertiesAndCorrespondingValuesFromPrototypeChain(anotherObj));