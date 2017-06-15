
"use strict";

var print = function (msg) {
    console.log(msg);
}

var book = {
    title: "DISCRETE MATHEMATICS"
    , cost: 89.23
};

//POI: The evaluated string in console doesn't wrap object key name with DOUBLE QUOTATION
print(book);

//POI: While converting a valid JS object to it's string representation, the keys will be wrapped into DOUBLE QUOTATIONS
//POI: NOT all values will be wrapped into DOUBLE QUOTATION because JSON has some defined data types such as Number. So
//10 will be presented as 10 NOT as "10"
var jsonStr = JSON.stringify(book);

print(jsonStr);

//POI: Parse converts a JSON string to it's corresponding JS object
//POI: DOUBLE QUOTATION will be removed from key if NOT required
print(JSON.parse(jsonStr));

//POI: Method in a valid JS object doesn't make sense if that object's whole purpose is to be converted to JSON
//POI: No Error/Exception is thrown if function is added in a JS object that is passed as a parameter to JSON.stringify
//the function simply ignores the the method property
print(JSON.stringify({
    name: "NAME"
    , sayName: function () {
        return "FUNCTION";
    }
    , fruits: ["APPLE", "ORANGE"]
}));

//------------------ JSON.stringify for inherited properties in JS object ----------------------------------

var Parent = function () {

    var self = this;

    self.isParent = false;

    return self;
}

var aChild = Object.create(Parent);

aChild["isChild"] = true;

var aParent = new Parent();

print(JSON.stringify(aParent));//{"isParent":false}

print(Object.getPrototypeOf(aChild) === Parent);//true

//POI: Parent is the prototype of Child. Still 'isParent' is NOT in the JSON version because JSON.stringify works on
//OWN PROPERTY
print(JSON.stringify(aChild));//{"isChild":true}
