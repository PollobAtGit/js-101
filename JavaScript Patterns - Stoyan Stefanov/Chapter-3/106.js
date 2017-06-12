
"use strict";

var print = function (msg) {
    console.log(msg);
}

//POI: Following will NOT create an array with one element, 3 rather it will create an array of capacity 3 with none of the
//indices populated
var arrWithCtor = new Array(3);

print(arrWithCtor.length);//3

//POI: All of the followings are true because the array has been created with one argument which is internally interpreted
//as array capacity

print(typeof arrWithCtor[0])//undefined

print(arrWithCtor[0] === undefined);//true
print(arrWithCtor[1] === undefined);//true
print(arrWithCtor[2] === undefined);//true

//POI: Following doesn't throw ERROR per se. rather simply 'undefined'
print(arrWithCtor[3] === undefined);

//POI: Browser/Node interpreter both throws ERROR for the following statement
// var arrWithCtorFloat = new Array(3.2);

//POI: Clever but useless trick to print 19 dashes in a line
print(new Array(20).join('-'));

// ------------------------ Check Array-ness of an Array ------------------------------------------

//POI: Following PROPERLY detects Array BUT apparently some IE versions DOESN'T GIVE PROPER RESULT when check is done with
//instanceof with FRAMES
print([] instanceof Array);//true
print(new Array() instanceof Array);

print(Array.isArray([]));
print(Array.isArray(new Array()));
print(Array.isArray(new Array(3)));

print(Array.isArray({}));
print(Array.isArray(2));
print(Array.isArray("2"));

//POI: toString() is OVERRIDDEN in Array instance's toString() which eventually invokes 'join' on the Array
print(Array.prototype.toString.call([1, 2]));//1,2

//POI: Object's toString() is not built for Array instance BUT it can detect Array's in some way
//& returns '[object Array]' for Array's
print(Object.prototype.toString.call([1, 2]) === "[object Array]");//true

//POI: The 2nd one is NOT 'object' rather 'Object' BUT first one is 'object'
//POI: 1st parameter is actually the result of 'typeof' & 2nd parameter is the result of 'instanceof'
print(Object.prototype.toString.call({}) === "[object Object]");//true
print(Object.prototype.toString.call(1) === "[object Number]");//true
print(Object.prototype.toString.call("1") === "[object String]");//true

//POI: Caveat of using Object constructor. The returned object is an Object BUT ALSO STRING
print(new Object("STRING") instanceof String);//true

//------------------------ POLYFILL --------------------------------------

if(!Array.isArray) {
    Array.isArray = function(args) {

        //POI: toString() defined in Object will ALWAYS return '[object Array]' for Array type instances
        return Object.prototype.toString.call(args) === "[object Array]";
    }
}