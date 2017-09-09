console.log(typeof "Nicholas");
console.log(typeof 10); //number
console.log(typeof 5.1); //number
console.log(typeof true);
console.log(typeof null); //object
console.log(typeof undefined); //undefined
// DO: Check "null" & "undefined"
var nullable = null;
if (nullable === null) {
    console.log("Null Object");
}
// POI: TS Number can have null & undefined both
var nullableNumber = null;
var undefinedNumber = undefined;
var nullBoolean = null;
var undefinedBoolean = undefined;
if (nullableNumber === null
    && undefinedNumber === undefined
    && nullBoolean === null
    && undefinedBoolean === undefined) {
    console.log("Null & Undefined Number & Boolean");
}
// DO: Invoke methods on primitive values
var nName = "Nicholas";
console.log(nName.toLowerCase());
console.log(nName.toUpperCase());
// POI: Gets the substring starting from 2 ending at (5 - 1)
console.log(nName.substring(2, 5));
console.log(nName.charAt(2));
console.log(nName[2]);
var num = 10;
console.log(num.toFixed(2)); //10.00
console.log(num.toFixed(4));
// POI: Both of the followings throw run time exception
// Not very useful
// console.log(undefinedNumber.toFixed(3));
// console.log(nullableNumber.toFixed(3));
