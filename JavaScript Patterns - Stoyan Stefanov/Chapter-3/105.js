
"use strict";

var print = function (msg) {
    console.log(msg);
}

//POI: Better pattern to define all variables at the beginning of the function
//POI: Array constructor takes comma seperated values
var arrUsingCtor = new Array(1, "ARRAY", null, undefined, {})
    , arrLiteral = [1, "ARRAY", null, undefined, {}];

print(arrUsingCtor);
print(arrLiteral);

print(arrUsingCtor.constructor === Array);

//POI: Arrays created with literal pattern also refers to the 'Array' built-in constructor
print(arrLiteral.constructor === Array);

//POI: Interesting! Array object's prototype is NOT defined
//TODO: Why?
print(arrUsingCtor.prototype === undefined);//true
print(arrLiteral.prototype === undefined);//true

print(typeof arrUsingCtor);//object
print(typeof arrLiteral);//object

print(Array.isArray(arrUsingCtor));//true
print(Array.isArray(arrLiteral));//true