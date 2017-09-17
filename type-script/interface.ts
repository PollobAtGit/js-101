
let numberWithNull: number = 10;

// POI: Following throws exception
// numberWithNull = "";

// POI: Both of the followings are possible with non-strict mode
// POI: But in strict mode null can not be assigned to number or other data types

// numberWithNull = null;
// numberWithNull = undefined;

console.log(numberWithNull === null);//true

interface IAnimal { }

class Rhino implements IAnimal { }

class Elephant implements IAnimal { }

class Snake implements IAnimal { }

class Fruit { }

// POI: Inferred Type is Snake[]. Not IAnimal
let inferredAnimals = [new Snake(), new Rhino(), new Elephant()];

// TODO: Why is this alright? Fruit doesn't implement IAnimal
// POI: Think  as TS interface as Shape of the object rather than the 'is a' relationship usually found in languages like C#
// POI: IAnimal & Fruit both HAVE SAME SHAPE because none of the interface/class has any members. So they HAVE THE SAME SHAPE
let animals: IAnimal[] = [new Fruit(), new Snake(), new Rhino(), new Elephant()];

// TODO: Why is this alright? Fruit doesn't implement IAnimal
// POI: IAnimal & Fruit both have the same shape
let fruit: IAnimal = new Fruit();

interface ILabeledValue {
    label: string;
}

// POI: Defining the SHAPE of the parameter
// POI: Compiler will ATLEAST check for the argument's presence
function printLabel(labelObj: ILabeledValue) {
    console.log(labelObj.label);
}

// POI: SHAPE literally means matching type of property & matching property name (key)
// Though order doesn't matter
let obj = { size: 10, label: "Another Obj" };

// POI: Obj is fine compared to ILabeledValue because it atleast has the components of ILabeledValue
printLabel(obj);

function anotherPrintLabel(obj: { label: string, num: number }) {
    console.log(obj.label + " => " + obj.num);
}

// POI: Presence of 'another' is fine. The method will check for the lowest (atleast) level of matching
let s = { num: 10, label: "OOPS", another: {} };
anotherPrintLabel(s);

