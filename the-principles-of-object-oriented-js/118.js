
function print(msg) {
    console.log(msg)
}

function Person(name) {
    this.myName = name;

    this.iAmAnOwnProperty = function () { return null; }
}

//POI: This function will be shared by ALL of the instances of 'Person'
//POI: 'sayName' is sayed to be the PROTOTYPE PROPERTY
Person.prototype.sayName = function () {
    return "My Name Is: " + this.myName;
}

var onePerson = new Person("JOHN");
var anotherPerson = new Person("NIKOLAS");

print(onePerson.sayName());
print(anotherPerson.sayName())

print(onePerson.hasOwnProperty("myName"));//true
print(anotherPerson.hasOwnProperty("myName"));//true

// --------------- PROTOTYPE PROPERTIES ARE NOT OWN PROPERTIES --------------------------------

//POI: 'sayName' is NOT AN OWN PROPERTY
print(onePerson.hasOwnProperty("sayName"));//false
print(anotherPerson.hasOwnProperty("sayName"));//false

//POI: 'iAmAnOwnProperty' IS AN OWN PROPERTY
print(onePerson.hasOwnProperty("iAmAnOwnProperty"));//true
print(anotherPerson.hasOwnProperty("iAmAnOwnProperty"));//true

// --------------- PROTOTYPE PROPERTIES ARE SHARED BETWEEN INSTANCES (WHICH CAN BE UNDESIRABLE SOMETIMES) --------------

//POI: Properties in prototype need NOT to be method ONLY
//POI: Illustrates a very important fact that JS allows to dynamic property addition to prototype
Person.prototype.favorites = [];

// onePerson.prototype.favorites.push.call();
// MSExecAtPriorityFunctionCallback.pro

//POI: Both of the following insertion will impact the prototype array

Array.prototype.push.call(onePerson.favorites, "CRLF");
Array.prototype.push.call(anotherPerson.favorites, "LF");

print(onePerson.favorites);//[ 'CRLF', 'LF' ]
print(anotherPerson.favorites);//[ 'CRLF', 'LF' ]

//POI: Pushing value to array instance of the prototype
Array.prototype.push.call(Person.prototype.favorites, "CR");

print(onePerson.favorites);//[ 'CRLF', 'LF', 'CR' ]
print(anotherPerson.favorites);//[ 'CRLF', 'LF', 'CR' ]

// ------------------------ BETTER PATTERN TO ADD PROPERTIES INTO PROTOTYPE --------------------

function Human(name) {
    this.name = name;
    this.iAmAnOwnProperty = function () { return undefined; }
}

//POI: This pattern
Human.prototype = {
    sayName: function () { return this.name; },
    toString: function () { return "[ This Person't Name Is : " + this.name + "]" }
}

var oneHuman = new Human("MOBIN");
var anotherHuman = new Human("ANOTHER MOBIN");

print(oneHuman.sayName());
print(anotherHuman.sayName());

//POI: The methods are indeed SHARED between object instances
print(oneHuman.sayName === anotherHuman.sayName);//true
print(oneHuman.toString === anotherHuman.toString);//true

//POI: 'iAmAnOwnProperty' is defined inside the constructor. So they are NOT shared
print(oneHuman.iAmAnOwnProperty === anotherHuman.iAmAnOwnProperty);//false

// ------------------------ DON'T NEED TO USE 'PROTOTYPE' PROPERTY TO SHARE PROPERTIES --------------------

//POI: Apparently, if only focus is to SHARE properties, then it's enough to add the property to the
//constructor (function reference)
Human.randomProperty = function () { return null; }

print(oneHuman.randomProperty === anotherHuman.randomProperty);//true

//POI: Downside (might be desirable also) of this apporach is THAT property will NOT be inherited because
//inheritance mechanism depends on 'prototype' property
var inheritedFromHuman = Object.create(oneHuman);

//POI: This property is NOT inherited because THAT property is NOT in prototype
// print(inheritedFromHuman["randomProperty"]());

print(inheritedFromHuman["sayName"]());
