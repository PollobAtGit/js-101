
'use strict';

function print(msg) {
    console.log(msg);
}

//String
var name = "Nicholas";
var selection = "a";

print(name);
print(selection);

//Number
var number = -56;
var cost = 0.23;

print(number);
print(cost);

//Boolean
var isTrue = true;
var isFalse = false;

print(isTrue);
print(isFalse);

//null
var obj = null;

//undefined
var flag = undefined;

//POI: This will assign 'undefined' to 'ref' automatically
var ref;

print(obj);
print(flag);
print(ref);

var color = "red";
var anotherColor = color;

print(color);
print(anotherColor);

//POI: This assignment will not have any impact on 'color' because color is a primitive type. So only the value is copied into 'anotherColor'
//POI: This is similar to C# Strings where also the value will be copied into another string not the reference
anotherColor = "blue";

print(color);
print(anotherColor);

//POI: To identify PRIMITIVE types 'typeof' should be used. It will provide proper type except for 'null'
print(typeof name);
print(typeof selection);

print(typeof number);
print(typeof cost);

print(typeof isFalse);
print(typeof isTrue);

print(typeof flag);

//POI: Value of 'obj' is 'null' but it's a JS bug to consider 'null' as object. To compare null use '==='
print(typeof obj);//object
print(typeof {});//object

//POI: In this case there no impact of using double equal
print(obj == null);//true
print(obj === null);//true