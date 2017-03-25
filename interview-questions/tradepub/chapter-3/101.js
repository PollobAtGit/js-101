
(function(){

    //Poi: Following statement will be translated into two parts 'b = 3; var a = b;' As variables defined
    //without 'var' are global in scope, 'b' is defined globally. On the other hand, a is defined LOCALLY
    //& is defined with the value of 'b'
    var a = b = 3;

    //Poi: Variables defined WITHOUT 'var' ARE NOT local
    anotherNonLocalVariable = 10;

    //Poi: Variables defined WITH 'var' ARE LOCAL to the SCOPE
    var anotherLocalVariable = 20;
})();

//a defined? false
console.log("a defined? " + (typeof a !== "undefined"));

//b defined? false
console.log("b defined? " + (typeof b !== "undefined"));

//anotherNonLocalVariable defined? true
console.log("anotherNonLocalVariable defined? " + (typeof anotherNonLocalVariable !== "undefined"));

//anotherNonLocalVariable defined? false
console.log("anotherLocalVariable defined? " + (typeof anotherLocalVariable !== "undefined"));