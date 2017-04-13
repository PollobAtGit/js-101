
'use strict';

function print(msg) {
    console.log(msg);
}

var obj = {
    get foo() {
        return "Getter Foo";
    },

    set foo(value) {
        print("Setter Foo:\t" + value);
    }
};

obj.foo = "Something is very wrong";
print(obj.foo);

var anotherObj = Object.create({});
var anotherObjTwo = Object.create(Object.prototype);

var protoOne = Object.getPrototypeOf(anotherObj);
var protoTwo = Object.getPrototypeOf(anotherObjTwo);

print(protoOne);
print(protoTwo);

print(Object.getPrototypeOf(protoOne));//{}
print(Object.getPrototypeOf(Object.getPrototypeOf(protoOne)));//null
print(Object.getPrototypeOf(protoTwo));//null

print(Object.prototype);//{}

//QRY: What is the hierarchy?
// null <- {} <- {} <- anotherObj
// null <- Object.prototype <- anotherObjTwo
