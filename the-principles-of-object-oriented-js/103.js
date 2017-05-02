
'use strict';

function print(msg) {
    console.log(msg);
}

//POI: Following two ways of array declaration are same
//QRY: Is there any best practices?
var arrayByCtor = new Array("Boy", "Torch", 12, 23.02, { name: "Jane" });
var arr = ["Boy", "Torch", 12, 23.02, { name: "Jane" }];

print(arrayByCtor);
print(arr);

//POI: Creating function using function constructor
//POI: Last argument of the constructor is the body of the function all other arguments at the beginning are the arguments to the function
var funcUsingFunctionCtor = new Function("value", "return value;");

print(funcUsingFunctionCtor(10));

var addFuncUsingFunctionCtor = new Function("valueOne", "valueTwo", "return valueOne + valueTwo;");

print(addFuncUsingFunctionCtor(10, 15));

function addAllGivenValuesFunctionLiteral() {
    var arrLength = arguments.length,
        sum = 0;

    //POI: Best practice (if applicable) because counting down to zero is faster
    while (arrLength--) {
        sum += arguments[arrLength];
    }

    return sum;
}

//POI: Whole function body is in string
var addAllGivenValuesFunctionCtor = new Function("var arrLength = arguments.length, sum = 0; while (arrLength--) { sum += arguments[arrLength]; } return sum;");

print(addAllGivenValuesFunctionLiteral(10, 15, 23));
print(addAllGivenValuesFunctionCtor(10, 15, 23));

//QRY: What's the usage of 'g'?
var regExpCtor = new RegExp("\\d+", "g");
var regExpLiteral = /\d+/g;

var alphaNumericString = "AsbD8r9asdf10";

//POI: Split the string by numeric values
print(alphaNumericString.split(regExpCtor).join(","));
print(alphaNumericString.split(regExpLiteral).join(","));

var arrByCtor = new Array(10.23, 569, "HP");
arrByCtor.push({ name: "LEMON" });

print(arrByCtor);

//POI: If enumerable is false (default value) then if the object instance is evaluated then that property will not be shown
//POI: In other words, when an object is evaluated only those properties will be shown that are own property & also enumerable property (Most probably, Object.keys is used)
var obj = Object.create({}, {
    name: {
        value: "HU",
        enumerable: true
    }
});

//POI: 'push' is a function but that can be invoked also using bracket notation
arrByCtor["push"](obj);

print(arrByCtor);


var numericArray = [];
function pushOrPop(operation, valueToPush) {
    if (!valueToPush && operation && operation.toUpperCase() === "POP") {
        return Array.prototype[operation].call(numericArray);
    }
    Array.prototype[operation].call(numericArray, valueToPush);
}

pushOrPop("push", 10);
pushOrPop("push", 100);
print(numericArray);

print(pushOrPop("pop"));//100
print(numericArray);

print(pushOrPop("pop"));//10
print(numericArray);

print(pushOrPop("pop"));//undefined
print(numericArray);