/**
 * Created by pollo_000 on 11/30/2016.
 */


//Allowed as function declarations are hoisted
willDoNothing();

function willDoNothing() {
    console.log("DOING NOTHING");
}

//This function has infinite recursion
function inFiniteRecursion() {
    inFiniteRecursion();
}

//This invocation will throw following error: RangeError: Maximum call stack size exceeded
//inFiniteRecursion();

//Not allowed as function variables aren't hoisted
//functionVariableInfiniteRecursion();//undefined

//This function has infinite recursion
var functionVariableInfiniteRecursion = function () {
    functionVariableInfiniteRecursion();
};

//This invocation will throw following error: RangeError: Maximum call stack size exceeded
//functionVariableInfiniteRecursion();

/******************************** INTERESTING EXAMPLE********************************************/

function chicken() {
    egg();
}

function egg() {
    chicken();
}

//This invocation will throw following error: RangeError: Maximum call stack size exceeded
//chicken();

//This invocation will throw following error: RangeError: Maximum call stack size exceeded
//egg();

/*********************************** MORE ABOUT VARIABLE HOISTING**********************************/


console.log(j);//undefined
for (var j = 0; j < 0; j++) {
}

console.log(j);//0

function iHaveALoop() {

    //This is scary. Never knew it. Variable i is defined in the loop initialization portion but as only function in
    // JS creates a new scope this variable i is hoisted to the top of function. So is accessible here also at the end
    // of the loop. See the later function which shows what interpreter has done
    console.log(i);//undefined

    //Note that this loop (braces) doesn't create a scope
    for (var i = 0; i < 3; i++) {
    }

    console.log(i);//3
}

function iHaveALoopDemystified() {

    var i;//Because of function hoisting
    console.log(i);//undefined

    //Note that this loop (braces) doesn't create a scope
    for (i = 0; i < 3; i++) {
    }

    console.log(i);//3
}

iHaveALoop();
iHaveALoopDemystified();

//Similar to 'this' in browser, alert is a browser only API, not a part of JS
//alert("");

/******************************** OPTIONAL ARGUMENT***********************************************/

//Following lin throws exception: ReferenceError: base is not defined
//console.log(base);

//Following lin throws exception: ReferenceError: exponent is not defined
//console.log(exponent);

//POI #1: function parameters are locally scoped to that function

function pow(base, exponentParam) {
    if (exponentParam === undefined) {
        var exponent = 2;//This is not scoped inside the if-else rather scoped inside the function
    } else {
        var exponent = exponentParam;
    }

    var power = 1;
    for (var i = 1; i <= exponent; i++) {//Using variable 'exponent' defined inside if-else
        power *= base;
    }

    return power;
}

console.log("\nPOWER OF n\n");
console.log(pow(2, 4));
console.log(pow(2));