
//"use strict";

var print = function (msg) {
    console.log(msg);
};

var num = -99;

print(typeof num);//number
print(Number.prototype.toPrecision.call(new Number(num), 5));

print(typeof new Number());//object

//POI: Internally, num is converted to Number object. Number object contains other utility methods. Which can then be
//invoked on that Number instance
print(num.toFixed(2));

//POI: Adding property 'add 10' to 'number'
//POI: In strict mode, it's NOT allowed to add 'property' to a primitive type
num["add 10"] = num + 10;

//POI: JS interpretor silently failed to add a property to a PRIMITIVE type
print(num["add 10"] === undefined);//true

var aNumber = new Number("10");

//POI: Following indicates 'aNumber' is an Object. First part of the default evaluated string is 'Constructor'
print(aNumber);//[Number: 10]

//POI: Invoking 'toString()' will return the number's String representation
//POI: 'toString' is a method in String Type (NOT the primitive type but Wrapper String Type)
print(aNumber.toString());

//POI: Using 'valueOf' to get the NUMERICAL value of the Number object
//POI: 'aNumber' is an object. So we can augment the instance like a regular JS object
aNumber["add 10"] = aNumber.valueOf() + 10;

//POI: Unlike primitive type 'number' the property is NOT lost. So the orginal Number object has been augmented
print(aNumber["add 10"]);//20
