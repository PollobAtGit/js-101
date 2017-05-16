
function print(msg) {
    console.log(msg);
}

function Person(name) {

    //POI: 'this' is used to make sure the property is used for THIS Person instance
    Object.defineProperty(this, "name", {

        //POI: Getter for 'name' property
        get: function () { return name; },

        //POI: Setter for 'name' property
        set: function (newName) { name = newName; },

        //POI: Configuration option
        enumerable: true,
        configurable: true
    });

    var self = this;
    return {
        sayName: function () {
            return self.name;
        }
    };
}

var aPerson = new Person("JOHN");

print(aPerson.sayName());
print(aPerson.name);//undefined

// ------------------------------- INVOKE WITHOUT new -----------------------------

print("\n------------------------------- INVOKE WITH new -----------------------------\n");

function Human(name) {
    Object.defineProperty(this, "name", {
        get: function () { return name; },
        set: function (newName) { name = newName; },

        //POI: If the property is NOT enumerable than 'console.log' will NOT show the property name
        //because it only considers enumerable property (may be uses 'Object.keys')
        enumerable: true
    });

    //POI: The method 'sayMyName' is BOUND with the object instance. So for 'n' numbers of object instances
    //there will be 'n' functions
    this.sayMyName = function () { return this.name; };
}

var aHuman = new Human("JAKAS");

print(aHuman);
print(aHuman.name);
print(aHuman.sayMyName());

print(typeof aHuman);//object

print("\n------------------------------- INVOKE WITHOUT new -----------------------------\n");

//POI: Not using 'new'. So 'anotherPerson' is NOT an object
var anotherHuman = Human("NICHOLAS");

//POI: Here 'Human' is JUST a function (because NOT using keyword 'new'). So no object is being returned
print(anotherHuman);//undefined

//POI: anotherHuman is NOT an object
print(anotherHuman instanceof Object);//false

//POI: As anotherHuman is NOT an object it is NOT a 'Human' too
print(anotherHuman instanceof Human);//false

//POI: 'anotherHuman' is NOT any of the main primitive types (Number, String, Boolean) neither is it a Object
print(typeof anotherHuman);//undefined

//POI: As the function has NOT been used in context of constructor (used without 'keyword'), 'this' inside
//the function has been BOUND TO GLOBAL OBJECT (in browser, it will be the 'Window' object)

print("\n---- PROPERTIES INSIDE HUMAN ARE GLOBAL OBJECT'S PROPERTY ----\n");

print(name);//NICHOLAS
print(sayMyName());//NICHOLAS

