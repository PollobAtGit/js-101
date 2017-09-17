"use strict";
var numberWithNull = 10;
// POI: Following throws exception
// numberWithNull = "";
// POI: Both of the followings are possible with non-strict mode
// POI: But in strict mode null can not be assigned to number or other data types
// numberWithNull = null;
// numberWithNull = undefined;
console.log(numberWithNull === null); //true
var Rhino = (function () {
    function Rhino() {
    }
    return Rhino;
}());
var Elephant = (function () {
    function Elephant() {
    }
    return Elephant;
}());
var Snake = (function () {
    function Snake() {
    }
    return Snake;
}());
var Fruit = (function () {
    function Fruit() {
    }
    return Fruit;
}());
// POI: Inferred Type is Snake[]. Not IAnimal
var inferredAnimals = [new Snake(), new Rhino(), new Elephant()];
// TODO: Why is this alright? Fruit doesn't implement IAnimal
// POI: Think  as TS interface as Shape of the object rather than the 'is a' relationship usually found in languages like C#
// POI: IAnimal & Fruit both HAVE SAME SHAPE because none of the interface/class has any members. So they HAVE THE SAME SHAPE
var animals = [new Fruit(), new Snake(), new Rhino(), new Elephant()];
// TODO: Why is this alright? Fruit doesn't implement IAnimal
// POI: IAnimal & Fruit both have the same shape
var fruit = new Fruit();
// POI: Defining the SHAPE of the parameter
// POI: Compiler will ATLEAST check for the argument's presence
function printLabel(labelObj) {
    console.log(labelObj.label);
}
// POI: SHAPE literally means matching type of property & matching property name (key)
// Though order doesn't matter
var obj = { size: 10, label: "Another Obj" };
// POI: Obj is fine compared to ILabeledValue because it atleast has the components of ILabeledValue
printLabel(obj);
function anotherPrintLabel(obj) {
    console.log(obj.label + " => " + obj.num);
}
// POI: Presence of 'another' is fine. The method will check for the lowest (atleast) level of matching
var s = { num: 10, label: "OOPS", another: {} };
anotherPrintLabel(s);
