
const cl = (x) => console.log(x);
const cln = (x) => { console.log(); console.log(x); }

/**Prototypical inheritence */

const Book = function (id, x, y) {
    this._id = id;
    this._x = x;
    this._y = y;
}

Book.prototype.getSummation = function () {
    return this._x + this._y + this._id;
}

// POI: Not initializing the so called 'base' class
const Novel = function () { }

Novel.prototype.getSummation = function () {

    // POI: To invoke the so called base class method we need to make sure
    // 1. We provide everything that the function is required
    // 2. Invoke the function with required reference (via prototype)
    // 3. Invoke the function/method using 'call' method of function

    // POI: There's no explicit prototype relation between Novel & Book
    // POI: Explicit prototype relation is required if we want to have the methods of Book to be methods of Novel
    // POI: Passing the context when invoking the "base" method
    // POI: The context has the same properties that are expected in 'getSummation' method

    return `Novel => ${Book.prototype.getSummation.call({ _id: 56, _x: 100, _y: 1.23 })}`;// Novel => 157.23000000000002
}

cl(new Novel(1, 2, 3).getSummation());

/**Static class member */

let i = 1;

// POI: ReferenceError: Printer is not defined
// POI: Classes are not hoisted
// const invalidPrinter = new Printer();

// POI: Classes are not hoisted
class Printer {

    constructor(id) {

        // TODO: Make private
        this._id = id;
    }

    // POI: static member with same name can co-exist
    static isInstanceCreated() {

        // POI: this.instance can be defined here given that getPrinter is invoked first
        return this.instance !== undefined && this.instance !== null;
    }

    // POI: Instance member can co-exist with static member
    isInstanceCreated() {

        // POI: this.instance is not defined here because it's a instance member
        // POI: this.instance is only defined for any further static members
        return this.instance !== undefined && this.instance !== null;
    }

    static getPrinter() {

        // POI: Problematic! this can be referenced inside static member
        // POI: Singleton though constructor is public

        if (!this.instance) {
            this.instance = new Printer(++i);
        }

        return this.instance;
    }
}

// POI: Invoking static member of Printer
cln(Printer.isInstanceCreated());

// POI: getPrinter() is static so it can't be accessed with instance reference
// cln(new Printer().getPrinter());

cln(Printer.getPrinter());// Printer { _id: 2 }
cl(Printer.getPrinter());// Printer { _id: 2 }
cl(Printer.getPrinter());// Printer { _id: 2 }
cl(Printer.getPrinter());// Printer { _id: 2 }

cln(Printer.isInstanceCreated());

// POI: Invoking instance member
cl(new Printer().isInstanceCreated());

// POI: Lol !!!!
// POI: Binding a different context & forcing new instance creation
cln(Printer.getPrinter.call({ instance: null }));// Printer { _id: 3 }

// POI: Awesome !
// POI: Back to orginal context
cl(Printer.getPrinter());// Printer { _id: 2 }

// POI: Classes are functions under the hood. So it has 'name' property
cln(Printer.name);// Printer

class DummyBase {

}

class Dummy extends DummyBase {

    // POI: Overloaded constructors are not allowed
    // SyntaxError: A class may have one constructor

    constructor() {

        // POI: Derived constructor can invoke base class constructor using 'super'
        super();
    }
    // constructor(id) { }

    // POI: Static & non-static methods can exist with same name
    that() { return this; }
    static that() { return this; }
}

cln(Dummy.that());// [Function: Dummy]
cl(new Dummy().that());// Dummy {}

// IMPORTANT: static methods are ofteb called prototype methods
// IMPORTANT: Once 'this' is defined for a static method it will be bound with that
// IMPORTANT: Static works as a standalone function with no 'this' defined. Even though the virtue of being a function itself it can have
// it's pwn this defined

const thatAlias = Dummy.that;
const thatInstanceAlias = new Dummy().that;

cln(thatAlias());// undefined
cl(thatInstanceAlias());// undefined
cl(thatAlias.call(new Dummy()));// Dummy {}

const thatAliasWithContext = Dummy.that.bind(new Dummy());
cl(thatAliasWithContext());// Dummy {}

function Animal() { }

// POI: Old approach, instance member method
Animal.prototype.that = function () { return this; }

// POI: Old approach, static member
Animal.that = function () { return this; }

cln(new Animal().that());// Animal {}

// POI: Returned value is different than new static method
cl(Animal.that());// { [Function: Animal] that: [Function] }

const aThatAlias = Animal.that;
const aThatInstanceAlias = new Animal().that;

// Commented out because long list
// cln(aThatAlias());// global obj
// cl(aThatInstanceAlias());// global object
