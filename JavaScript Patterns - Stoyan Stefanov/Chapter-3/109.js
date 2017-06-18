
"use strict";

var print = function (msg) {
    console.log(msg);
};

print(typeof 1);//number
print(typeof "String");//string
print(typeof true);//boolean

print(1 instanceof Number);//false
print("String" instanceof String);//false
print(false instanceof Boolean);//false

// -------------------------- USING PRIMITIVE CONVERTER -----------------------------------------

print('');

//POI: 'Boolean' method converts given value to appropriate boolean value
print(Boolean(1));//true
print(Boolean(0));//false
print(Boolean(''));//false
print(Boolean('String'));//true

//POI: If no argument is given then the boolean value will be 'false'
print(Boolean());//false

print('');

//POI: Returned data type is of primitive type
print(typeof Number("1"));//number
print(typeof String(12));//string
print(typeof Boolean(1));//boolean

print('');

//POI: Converter can cast Wrapper types to proper primitive types
print(typeof Number(new Number()));//number
print(typeof String(new String()));//string
print(typeof Boolean(new Boolean()));//boolean

//POI: An object should be thrown in 'throw' statement
