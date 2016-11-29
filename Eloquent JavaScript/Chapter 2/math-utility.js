/**
 * Created by pollo_000 on 11/27/2016.
 */

'use strict';

print(Math.max(12, 56, 89));
print(Math.max(12, 56, 89, 10, 100));

print();

print(Math.min(12, 56, 89));
print(Math.min(12, 56, 89, 10, 100));

print();
unRefinedPrint("Number('12.32') => " + Number('12.32'));
unRefinedPrint("Number('number') => " + Number('number'));//NaN
unRefinedPrint("Number(NaN) => " + Number(NaN));//NaN
unRefinedPrint("Number(undefined) => " + Number(undefined));//NaN
unRefinedPrint("Number(null) => " + Number(null));//0
unRefinedPrint("Number('') => " + Number(''));//0
unRefinedPrint("Number('    ') => " + Number('  '));//Whitespace is being trimmed


//POI #1: Number is a function which returns a object so the usage should be 'new Number(...)' but here it's used just
// like a function. It can be done because in JS, class definition is actually a function which is called constructor
// if used with new

//POI #2 (From MDN): if a value can't be converted to number than NaN is returned.
// Apparently, empty ('') & null is convertible to number 0!

/*********************************** IsNaN ******************************************************/

print();
unRefinedPrint("Number.isNaN(Number('12.32') => " + Number.isNaN(Number('12.32')));
unRefinedPrint("Number.isNaN(Number('number') => " + Number.isNaN(Number('number')));
unRefinedPrint("Number.isNaN(Number(NaN) => " + Number.isNaN(Number(NaN)));
unRefinedPrint("Number.isNaN(Number(undefined) => " + Number.isNaN(Number(undefined)));
unRefinedPrint("Number.isNaN(Number(null) => " + Number.isNaN(Number(null)));
unRefinedPrint("Number.isNaN(Number('') => " + Number.isNaN(Number('')));
unRefinedPrint("Number.isNaN(Number('   ') => " + Number.isNaN(Number(' ')));

/*********************************** IsNaN On Direct Values ******************************************************/

print();
unRefinedPrint("Number.isNaN('12.32') => " + Number.isNaN('12.32'));
unRefinedPrint("Number.isNaN('number') => " + Number.isNaN('number'));
unRefinedPrint("Number.isNaN(NaN) => " + Number.isNaN(NaN));
unRefinedPrint("Number.isNaN(undefined) => " + Number.isNaN(undefined));
unRefinedPrint("Number.isNaN(null) => " + Number.isNaN(null));
unRefinedPrint("Number.isNaN('') => " + Number.isNaN(''));
unRefinedPrint("Number.isNaN(' ') => " + Number.isNaN(' '));
unRefinedPrint("Number.isNaN({}) => " + Number.isNaN({}));
unRefinedPrint("Number.isNaN(0 / 0) => " + Number.isNaN(0 / 0));

/*********************************** Global IsNaN On Direct Values ***********************************************/

print();
unRefinedPrint("isNaN('12.32') => " + isNaN("12.32"));
unRefinedPrint("isNaN(NaN) => " + isNaN(NaN));
unRefinedPrint("isNaN(null) => " + isNaN(null));
unRefinedPrint("isNaN('') => " + isNaN(''));
unRefinedPrint("isNaN(' ') => " + isNaN(' '));
unRefinedPrint("isNaN(0 / 0) => " + isNaN(0 / 0));

//Weird !!! Following three functions return true
unRefinedPrint("isNaN('number') => " + isNaN('number'));
unRefinedPrint("isNaN(undefined) => " + isNaN(undefined));
unRefinedPrint("isNaN({}) => " + isNaN({}));

/*********************************** POLYFILL *********************************************************/

//If the property/method isn't defined then use polyfill. Note, the definition & usage concept
// is similar to C# extension method

//This function won't work for valid numbers represented in string
Number.isNaN = Number.isNaN || function (value) {
    return typeof value === 'number' && isNaN(value);
};//Note the semicolon here. As the original statement is a assignment this end of statement is needed

//POI #3 : From this definition it's clear that global isNaN determines NaN-ability of number properly &
// is deficient in determining NaN-ability of other JS objects

//POI #4 : Note the strict equality (===) operator in the ployfil

/************************** POSSIBLE SAFE CONVERSION TO NUMBER *****************************************/

//This function should return undefined for null & ''
Number.tryParseNumber = Number.tryParseNumber || function (value) {
    //First condition will narrow the possible conversion down non-empty strings only. Only issue is NaN
    // is a number that's handled in second condition
    if (((typeof value === 'string' && value.trim() != '') || typeof value === 'number')
        && !Number.isNaN(Number(value))) {
        return Number(value);
    }
    return undefined;
};

print();
unRefinedPrint("Number.tryParseNumber(12.32) => " + Number.tryParseNumber(12.32));
unRefinedPrint("Number.tryParseNumber('12.32') => " + Number.tryParseNumber('12.32'));
unRefinedPrint("Number.tryParseNumber('number') => " + Number.tryParseNumber('number'));//NaN
unRefinedPrint("Number.tryParseNumber(NaN) => " + Number.tryParseNumber(NaN));//NaN
unRefinedPrint("Number.tryParseNumber(undefined) => " + Number.tryParseNumber(undefined));//NaN
unRefinedPrint("Number.tryParseNumber(null) => " + Number.tryParseNumber(null));//0
unRefinedPrint("Number.tryParseNumber('') => " + Number.tryParseNumber(''));//0
unRefinedPrint("Number.tryParseNumber('    ') => " + Number.tryParseNumber('  '));//Whitespace is being trimmed


/*********************************** FUNCTIONS *********************************************************/

function print(message) {
    console.log(message || '');//:D
}

function unRefinedPrint(message) {
    console.log(message);
}