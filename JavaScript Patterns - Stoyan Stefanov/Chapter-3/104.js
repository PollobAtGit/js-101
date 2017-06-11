
// Using 'that' is a better pattern to be used when declaring constructor

"use strict";

var print = function (msg) {
    console.log(msg);
};

var Waffle = function () {

    //POI: Not using 'this' because in strict mode that is allowed only if instances are created using 'new' keyword
    //POI: Setting the prototype of newly created object to 'Waffle'
    //POI: Object.create only takes 'null' or a valid object as argument

    //TODO: Why following returns false for 'Waffle.prototype === aWaffle.prototype'
    //var self = Object.create(Waffle.prototype);

    var self = {
        //POI: Constructor property of the object should refer to the original function
        constructor: Waffle
        , prototype: Waffle.prototype
    }

    self.name = "WAFFLE";

    //POI: Explicit 'return' statement to ensure client can use this constructor with/without using 'new'
    return self;
};

Waffle.prototype.sayName = function () {
    return this.name;
};

//POI: Strict mode forces using 'new' keyword
var aWaffle = new Waffle();

//POI: Not using 'new' to get a new object
var anotherWaffle = Waffle();

print(aWaffle.name);
print(anotherWaffle.name);

//POI: Constructor has been gone! if not fixed using seperate property
print(aWaffle.constructor);//[Function: Object]

//POI: THERE'S NO PROTOTYPE
print(aWaffle.prototype);//undefined

print(anotherWaffle.constructor);//[Function Object]

//POI: THERE'S NO PROTOTYPE
print(anotherWaffle.prototype);//undefined

//POI: Constructors refer to the original function by default
//POI: Waffle is EXPLICITLY returning an object. So the default behavior will not be relevant unless developer EXPLICITLY fixes it
print(aWaffle.constructor === Waffle);//true
print(anotherWaffle.constructor === Waffle);//true

print(Waffle.prototype === aWaffle.prototype);//true
print(anotherWaffle.prototype === Waffle.prototype);//true

print(Waffle.prototype.sayName.call(aWaffle));//WAFFLE
print(Waffle.prototype.sayName.call(anotherWaffle));//WAFFLE

//TODO: Why following two doesn't work properly? Even in non-strict mode?
//print(aWaffle.sayName());
//print(anotherWaffle.sayName());
