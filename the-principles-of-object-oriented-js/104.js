/**
 * Created by pollob on 4/21/2017.
 */

//POI: This function will be hoisted. Only anonymous functions are not hoisted
function print(msg) {
    console.log(msg);
}

var texts = new Array('User is not defined', 'Calculation error');

//POI: Object.prototype's value is directly set to zero(0)
var fakeObj = Object.create(Object.prototype);
var fakeError = new Error('Internal Server Error');
var regularExpression = new RegExp('//d+');
var currentDate = new Date();

print(texts instanceof Array);
print(fakeObj instanceof Object);
print(fakeError instanceof Error);
print(regularExpression instanceof RegExp);
print(currentDate instanceof Date);

//POI: Type Function is used directly not the string representation or something else. Compare with C#/Java class name
print(function () {
    } instanceof Function);

//POI: All reference types (Array, Date, RegExp, Error, Function) are inherited from Object
print(texts instanceof Object);//true
print(fakeError instanceof Object);//true
print(regularExpression instanceof Object);//true
print(currentDate instanceof Object);//true
print(function () {
    } instanceof Object);//true

//POI: Better approach to find if an Array is an array. Some issue relevant with DOM frames
print("Array.isArray(texts) => " + Array.isArray(texts));

print(texts instanceof Error);//false
print(texts instanceof RegExp);//false
print(texts instanceof Date);//false