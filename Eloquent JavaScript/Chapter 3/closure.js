/**
 * Created by pollo_000 on 11/30/2016.
 */


function iReturnAClosure(param) {
    //Note no function name required. So that's another way of declaring function but only works where regular
    // variable is expected. In other words, this is example of JS functional behavior where function is treated as
    // data. This statement is nothing fancy because the syntax is same as 'function variable'
    // Ex: var func = function() {}
    //See function 'iUseFunctionVariable' declared in this page
    return function (closureParam) {
        //If 'param' is 10 then for the returned function this line will be something like 'return 0 * closureParam'
        //So the variable value is SORT OF replaced by original value
        //Another way to think is the value isn't replaced per se but the returned function some how freezes the
        // variable value so that it can be used when executed

        //Further analysis commented in function 'iMightReturnUndefined'

        return param * closureParam;
    }
}

/************** Immediate Invocation ***********************/

console.log(iReturnAClosure(10));//[Function]
console.log(iReturnAClosure(10)());//NaN because parameter 'closureParam' is undefined as no value is supplied
// & any arithmetic operation on undefined produces NaN unlike null

console.log(iReturnAClosure(10)(10));//100

/************** Another approach by storing function in another variable ***********************/

var closureFunc = iReturnAClosure(10);
console.log(closureFunc);//[Function]
console.log(closureFunc());//NaN
console.log(closureFunc(10));//100

/********************************* ANOTHER SIMPLE CLOSURE EXAMPLE **********************************/

function iReturnClosureAndHaveANonParamLocalVariable() {
    var localVar = 5;
    return function () {
        return localVar;//This value will be FREEZE-D/REPLACED by the original value
    }
}

console.log(iReturnClosureAndHaveANonParamLocalVariable()());//5

function iReturnClosureAndHaveAParamLocalVariable(n) {
    return function () {
        return n;
    }
}

console.log(iReturnClosureAndHaveAParamLocalVariable(5));//[Function]
console.log(iReturnClosureAndHaveAParamLocalVariable(5)());//5

/********************************* CLOSURE USING FUNCTION VARIABLE **********************************/

//This example raises an interesting scenario. See below
function iUseFunctionVariable() {
    var localVariable = 10;
    var funcVariable = function () {
        return localVariable;
    };
    return funcVariable;
}

function iMightReturnUndefined() {
    var funcVariable = function () {
        return localVariable;
    };

    //Because of function hoisting return statement above might get undefined
    //But it isn't getting undefined because variable has been instantiated when the function is returned
    // This proves another thing, JS FREEZES the local variables that are used in closure but DOES NOT REPLACE
    // The variable with the content. undefined would have been returned if that were the case
    var localVariable = 15;

    return funcVariable;
}

console.log(iMightReturnUndefined());//[FUNCTION]

//Awesome !!!!
console.log(iMightReturnUndefined()());//15 (!!!!)

/**************************** LET'S RETURN UNDEFINED FROM THE ABOVE CLOSURE :D **********************************/

function closureWillDefinitelyReturnUndefined() {
    var funcVariable = function () {
        return localVariable;
    };
    return funcVariable;

    var localVariable = 15;//This code will never be reached but because of variable hoisting statement
    // 'return localVariable;' is valid but the FREEZE-D value is undefined because the variable is yet to be
    // initialized
}

console.log(closureWillDefinitelyReturnUndefined());//[FUNCTION]

//Awesome !!!!
console.log(closureWillDefinitelyReturnUndefined()());//undefined

/*************************** RECURSION *****************************************************/

function power(base, exponent) {
    //Depending on function hoisting as none of these functions depend on any global variable
    if (isValidNumberOrString(base) && isValidNumberOrString(exponent)) {


        //No depending on type coercion. So converting
        exponent = Number(exponent);
        base = Number(base);

        //Conversion is required for proper execution of this statement
        switch (exponent) {
            //Guard clause for natural recursion. Even though this condition can be entirely omitted
            case 1:
                return base;
            //If input contains 0 as exponent
            case 0:
                return 1;
            default :
                break;
        }
        return base * power(base, (exponent - 1));//Conversion isn't required for this statement
    }
    return Number.NaN;//Denotes invalid operation
}

function isValidNumberOrString(value) {
    return (typeof value === 'number' || typeof value === 'string') && !isNaN(value);
}

console.log(power(2, 4));//16
console.log(power(2, 3));//8
console.log(power(9, 3));//729

console.log(power(9));//NaN
console.log(power());//NaN
console.log(power(3, 3, 'Noting'));//27
console.log(power(undefined, undefined));//NaN
console.log(power(null, null));//NaN
console.log(power(Number.NaN, Number.NaN));//NaN
console.log(power(true, false));//NaN
console.log(power('Ulala-Ulala', false));//NaN
console.log(power('', false));//NaN


console.log(power('', 2));//0
console.log(power('', ''));//1 (1^0 = 1)
console.log(power(0, 0));//1 (0^0 = 1)

//BOOM! exponents are allowed to be negative
//console.log(power(-3, -3));//1 (0^0 = 1)