
'using strict'

function print(msg) {
    console.log(msg);
}

//Poi: Object notation to create JS objects
var myObj = {};

print(myObj);

myObj.name = "HP";
myObj.price = 102.23;
myObj.toString = function() {
    //Poi: 'this' works inside function & it prtoperly refers to the object
    return "Name => " + this.name + " Price => " + this.price;
}

print(myObj);
print(myObj.toString());

//Poi: anotherObject WILL REFER to 'myObj'. So ultimately, anotherObject IS NOT a different object all together
//Poi: This is a problem. Because if we create a object using object notation than we can't create another
//object from it that has similar structure to this.
var anotherObject = myObj;

print(anotherObject);
print(anotherObject.toString());

//Poi: This assignment will change 'myObj' because anotherObject is simply a reference to myObj
anotherObject.name = "Canon";

print(myObj);
print(myObj.toString());

print(anotherObject);
print(anotherObject.toString());

//Poi: In literal object notation, ALL PROPERTIES & FUNCTIONS are that object's OWN PROPERTY
print('name' in myObj);
print(myObj.hasOwnProperty('name'));
print('toString' in myObj);
print(myObj.hasOwnProperty('toString'));

print('name' in anotherObject);
print(anotherObject.hasOwnProperty('name'));
print('toString' in anotherObject);
print(anotherObject.hasOwnProperty('toString'));

//Poi: This statement will add 'isAvailable' property to BOTH 'anotherObject' & 'myObj'
anotherObject.isAvailable = false;

print(myObj);
print(anotherObject);