/**
 * Created by pollo_000 on 11/30/2016.
 */


var falsyNameSpace = falsyNameSpace || {};

falsyNameSpace.empty = '';
falsyNameSpace.nonEmpty = 'not-empty';
falsyNameSpace.nullValue = null;
falsyNameSpace.falseValue = false;
falsyNameSpace.trueValue = true;
falsyNameSpace.emptyArray = [  ];
falsyNameSpace.nonEmptyArray = [  0, 5 ];

falsyNameSpace.obj = {};
falsyNameSpace.undefinedValue = undefined;
falsyNameSpace.nanValue = NaN;

var valueToOperateOn = 1;

//Produces Zero (!!!!)
console.log("EMPTY STRING * 1 => " + falsyNameSpace.empty * valueToOperateOn);//0
console.log("null * 1 => " + falsyNameSpace.nullValue * valueToOperateOn);//0
console.log("[] * 1 => " + falsyNameSpace.emptyArray * valueToOperateOn);//0 (!!!)
console.log("false * 1 => " + falsyNameSpace.falseValue * valueToOperateOn);//0

//Produces valid numerical value
console.log("null + 1 => " + (falsyNameSpace.nullValue + valueToOperateOn));//1
console.log("null / 1 => " + (falsyNameSpace.nullValue / valueToOperateOn));//0
console.log("true + 1 => " + (falsyNameSpace.trueValue + valueToOperateOn));//2

//Produces NaN
console.log("{} * 1 => " + falsyNameSpace.obj * valueToOperateOn);//NaN
console.log("undefined * 1 => " + falsyNameSpace.undefinedValue * valueToOperateOn);//NaN
console.log("NaN * 1 => " + falsyNameSpace.nanValue * valueToOperateOn);//NaN
console.log("[ 0, 5 ] => " + falsyNameSpace.nonEmptyArray * valueToOperateOn);//NaN
console.log("NON EMPTY STRING * 1 => " + falsyNameSpace.nonEmpty * valueToOperateOn);//NaN

//On undefined
console.log("undefined / 1 => " + (falsyNameSpace.undefinedValue / valueToOperateOn));//NaN
console.log("undefined + 1 => " + (falsyNameSpace.undefinedValue + valueToOperateOn));//NaN
console.log("undefined - 1 => " + (falsyNameSpace.undefinedValue - valueToOperateOn));//NaN

console.log("undefined % 1 => " + (falsyNameSpace.undefinedValue % valueToOperateOn));//NaN
console.log("++undefined => " + (++falsyNameSpace.undefinedValue));//NaN
console.log("--undefined => " + (--falsyNameSpace.undefinedValue));//NaN
console.log("-undefined => " + (-falsyNameSpace.undefinedValue));//NaN
console.log("+undefined => " + (+falsyNameSpace.undefinedValue));//NaN
console.log("+undefined => " + (+falsyNameSpace.undefinedValue));//NaN

//Hotasa !!!
var secondValueToOperateOn = 4;

console.log("undefined << 4 => " + (falsyNameSpace.undefinedValue << secondValueToOperateOn));//0
console.log("undefined >> 4 => " + (falsyNameSpace.undefinedValue >> secondValueToOperateOn));//0

//On null
console.log("null / 1 => " + (falsyNameSpace.nullValue / valueToOperateOn));//NaN
console.log("null + 1 => " + (falsyNameSpace.nullValue + valueToOperateOn));//NaN
console.log("null - 1 => " + (falsyNameSpace.nullValue - valueToOperateOn));//NaN

console.log("null % 1 => " + (falsyNameSpace.nullValue % valueToOperateOn));//NaN
console.log("++null => " + (++falsyNameSpace.nullValue));//NaN
--falsyNameSpace.nullValue;//To show impact of -- on null in the next line
console.log("--null => " + (--falsyNameSpace.nullValue));//NaN
console.log("-null => " + (-falsyNameSpace.nullValue));//NaN
console.log("+null => " + (+falsyNameSpace.nullValue));//NaN
console.log("+null => " + (+falsyNameSpace.nullValue));//NaN

//POI #1: null is converted (type coerced) to zero (0) during arithmetic operation
//POI #2: Any basic arithmetic operation (+, -, *, /, ++, --, %, unary minus, unary plus) with undefined will result
// undefined only exception is shifting which produces zero (0) regardless of the offset