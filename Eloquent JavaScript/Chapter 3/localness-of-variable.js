/**
 * Created by pollo_000 on 11/29/2016.
 */

var x = 10;

function iHaveALocalX() {
    var x = 50;
    console.log("Inside function 'iHaveALocalX': " + x);
}

function iDontHaveLocalX() {
    console.log("Inside function 'iDontHaveLocalX': " + x);
}

function iCanModifyX() {
    x = 100;
    console.log("Inside function 'iCanModifyX': " + x);
}

function iCanCreateAGlobalVar() {
    y = 23.23;
    console.log("Inside function 'iCanCreateAGlobalVar': " + y);
}

/***************************** TEST CODE **********************************************/

console.log();

iHaveALocalX();//Output: 50
console.log("Global X: " + x);
console.log();

iDontHaveLocalX();
console.log();

iCanModifyX();
console.log("Global X: " + x);
console.log();

iCanCreateAGlobalVar();
console.log("Global Y: " + y);
console.log();

//POI #1: Creating function variable without keyword 'var' will create a global variable
//POI #2: 'use strict'; will prevent the above scenario. In that case a direct compilation (!) error will be thrown

/***************************** SCOPED FUNCTION **********************************************/

function landscape() {
    var result = "";

    function flat(size) {
        for (var count = 0; count < size; count++) {
            result += "_";//result can be seen here as it's in the outer scope
        }
    }

    function mountain(size) {
        result += "//";
        for (var count = 0; count < size; count++) {
            result += "'";
        }
        result += "\\";
    }

    //Following functions are see-able here as they are in the same scope
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);

    return result;//Modified string
}

console.log();
console.log(landscape());

/********************************* MULTIPLE NES ********************************************/

function bigOuterFunction(value) {
    function firstLayer(value) {

        //Boundary condition
        if (value <= -4) return;

        function secondLayer(value) {
            function thirdLayer(value) {
                function fourthLayer(value) {
                    console.log("fourthLayer => " + value);

                    //Recursive call
                    firstLayer(value);
                }

                console.log("thirdLayer => " + value);
                fourthLayer(value - 1);
            }

            console.log("secondLayer => " + value);
            thirdLayer(value - 1);
            //following functions are not accessible here as they are inside ANOTHER SCOPE
            //fourthLayer
        }

        console.log("firstLayer => " + value);
        secondLayer(value - 1);
        //following functions are not accessible here as they are inside ANOTHER SCOPE
        //thirdLayer
    }

    console.log("Outer Layer => " + value);
    firstLayer(value - 1);
    //following functions are not accessible here as they are inside ANOTHER SCOPE
    //secondLayer
}

bigOuterFunction(10);

/**************************** RECURSION ***************************************************/

function nthFib(n) {
    if (!Number.isNaN(n) && n >= 1) {
        if (n == 1 || n == 2) return n - 1;
        return nthFib(n - 1) + nthFib(n - 2);
    }
}

console.log("\nNTh Fibonacci Number \n");

var nth = 7;
console.log(nth + "th Fib => " + nthFib(nth));
nth = 10;
console.log(nth + "th Fib => " + nthFib(nth));
nth = 12;
console.log(nth + "th Fib => " + nthFib(nth));

// POI #3: Outer scope functions/variables are accessible but not inner scoped variables/functions

/***************************** VARIABLE HOISTING ***************************************/

var someVar = 23.65;
console.log(someVar);

function iHoistVariableDefinitionButNotAssignment() {
    console.log(varOne + "_" + varTwo);//Output:undefined_undefined
    var varOne = 10;
    var varTwo = 20;
}

function iWorkSimilarToTheAboveFunction() {
    var varOne;
    var varTwo;

    console.log(varOne + "_" + varTwo);//Output:undefined_undefined

    varOne = 10;
    varTwo = 20;
}

console.log();
iHoistVariableDefinitionButNotAssignment();
iWorkSimilarToTheAboveFunction();

// POI #4: Function 'iWorkSimilarToTheAboveFunction' shows what really happens when variables in a scope are hoisted

/***************************** BRACES DONT CREATE SCOPE ***************************************/

function noteTheForLoopVariable() {

    console.log(i);//undefined
    console.log(varInsideSwitch);//undefined

    for (var i = 0; i < 0; i++) {
    }

    switch (true) {
        case true:
        {
            var varInsideSwitch = 10;
            break;
        }
        default :
        {
            varInsideSwitch = 100;//Note that this variable is accessible here. Braces in the above case didn't create scope
            break;
        }
    }
    console.log(i);//0
    console.log(varInsideSwitch);//10
}

console.log("\n/** BRACES DONT CREATE SCOPE **/\n");
noteTheForLoopVariable();

// POI #5: In JS, scope can be created only by declaring function. So unlike any other language 'for' loop doesn't
// create a scope. That's why 'i' is accessible outside loop. In case of first print output is 'undefined' because
// variable i has been hoisted (i.e. declaration has been moved to the beginning of the function) but assignment
// statement is inside the loop. In the second print value is 0 because i has been assigned before

function onlyFunctionsCreateScope() {

    console.log(instance);//undefined
    {
        var instance = {};
    }
    console.log(instance);//{}

    //Following statement isn't valid throws exception because the variable isn't in another inner scope
    //console.log(functionVar);
    function innerFunction() {
        var functionVar = 10;
    }

    //Following statement isn't valid throws exception because the variable isn't in another inner scope
    //console.log(functionVar);
}

console.log("\n/** BRACES DONT CREATE SCOPE **/\n");
onlyFunctionsCreateScope();

/****************************** RE-ASSIGN TO A FUNCTION VARIABLE ***************************************/

var functionVariable = function () {
    console.log("First Function");
};//Note the semicolon

function launchMissile() {
    console.log("Launching Missile");
}//Note: no semi-colon used

functionVariable();

//Function variables can be re-assigned
functionVariable = function () {
    console.log("Second Function");
};

functionVariable();

//Function to be assigned is previously declared
functionVariable = launchMissile;

functionVariable();

console.log();

launchMissile();
launchMissile = function () {
    console.log("Missile replaced");
};

launchMissile();

// POI #6: Variable that holds a function declaration is called function variable.

/*************************************** FUNCTION HOISTING ******************************************/

console.log("\n/** FUNCTION HOISTING **\\\n");
console.log(iReturnString());//Similar to variable hoisting the mentioned function has been hoisted

function iReturnString() {
    return "String Returned";
}

//This is statement throws exception because function variables aren't hoisted so the mentioned function doesn't exist here
//console.log(iReturnNumber());

var iReturnNumber = function () {
    return 0.00;
};

// POI #7: Function variables AREN'T hoisted but function declarations ARE hoisted

/******************** POSSIBLE ISSUE WITH FUNCTION HOISTING ******************************************/

console.log("\n/** POSSIBLE ISSUE WITH FUNCTION HOISTING **\\");
console.log(iReturnObjConditionally());//undefined
// Even though isReturnOnj is true it's value will be undefined in the function because when interpreter comes to this
// statement it directly goes the function & executes it. Problem is assignment for boolean variable hasn't been done yet.

function iReturnObjConditionally() {
    if (isReturnOnj)
        return {};
    return undefined;
}

// Because of function hoisting the following line will be translated into following two lines
//var isReturnOnj;
//isReturnOnj = true;
//The first line will be moved to the beginning of the file but second (assignment) statement will be where it is right now.
var isReturnOnj = true;

console.log(iReturnObjConditionally());//{}
// isReturnOnj is true in this case because before interpreter executes this line it gets the assignment statement
// for the boolean so it's assigned to true

// POI #8: Function declaration is error-prone if it depends on variable(s) that are assigned later