/*************************** WHILE *********************************************/

/**
 * Created by pollo_000 on 11/28/2016.
 */

//This loop will not print zero (0)
var number = 5;
while (number >= 0) {
    print(number--);
}

/*********************** DO WHILE *********************************************/
print();

//This loop will not print zero (0)
number = 2;
do {
    print(number--);
} while (number >= 0);

/*********************** FOR LOOP *********************************************/

print();

//This loop will not print zero (0)
number = 5;
for (var i = number; i >= 0; i--) {
    print(i);
}

/*********************** BREAK OUT OF LOOP ***********************************/

print();

number = 10;
while (number >= 0) {
    if (number === 5)
        break;
    print(number--);
}

/********* STRICT EQUALITY NEEDED FOR GREATER/SMALLER THAN ******************/

print();

console.log(3 == 3);
console.log(3 == '3');

//Both of the following comparison results false & but none of them is comparing values but
// output is false because strict equality operator is being used
console.log(3 === '3');
console.log(3 === '4');

print();
console.log(3 != '4');
console.log(3 !== '4');
//Note this one. Output is true. Reason is Non-identity/strict inequality operator returns true
//if #1: Type for any of the operands doesn't match
//if #2: Type for both operators match but the content doesn't match

console.log(3 < 4);
console.log(3 < '4');//No strict counterpart exists for relational abstract operator

/************************ EQUALITY OPERATORS ON OBJECTS **************************/

//Query: Type conversion relevant for object comparison?
print("\nComparison on Objects\n");
console.log({} === {});
console.log({} !== {});

var ObjComparison = ObjComparison || {};
ObjComparison.obj = {};
ObjComparison.abotherObj = ObjComparison.obj;
ObjComparison.abotherEmptyObj = {};

console.log(ObjComparison.abotherObj === ObjComparison.obj);
console.log(ObjComparison.abotherEmptyObj === ObjComparison.obj);

ObjComparison.objWithProperties = { price: 30.23};
ObjComparison.abotherObjWithProperties = ObjComparison.objWithProperties;
ObjComparison.abotherObjWithProperties.price = 0;

//Note that this comparison returns true
console.log(ObjComparison.objWithProperties === ObjComparison.abotherObjWithProperties);

ObjComparison.abotherObjWithProperties.productId = "CFT56";
//Note that this comparison returns true
console.log(ObjComparison.objWithProperties === ObjComparison.abotherObjWithProperties);

/************************ FUNCTIONS ********************************************/

//This function will not print 0 because 0 is falsy value. So empty will be returned
function print(message) {
    console.log(message || '');//:D
}

//POI #1: JS does have exact equality/un-equality operator
//POI #2: Non-identity/strict inequality operator returns true
//if #1: Type for any of the operands doesn't match
//if #2: Type for both operators match but the content doesn't match
//POI #3: Identity/strict equality operator returns true if both type & content matches
//POI #4: Relational abstract operators (<=, <, >, >=) convert both of the operands to primitive types by invoking
// ValueOf() then make the comparison. There's no strict counter-part
//POI #5: In case comparison between objects abstract comparison & strict comparison both returns same value
//POI #6: In case comparison between objects only thing that is considered is whether both of the objects reference
// the same object or not. If they do then returned value is true otherwise false. No properties or property values
// aren't part of comparison


//Further reference & analysis: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators