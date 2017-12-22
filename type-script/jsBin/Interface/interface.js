var InterfaceOneOOne;
(function (InterfaceOneOOne) {
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
    // POI: In this case we are declaring the shape of the returned object (declaring interface)
    function createSquare(config) {
        // POI: Defining the shape dynamically similar to returned value
        var newSquare = { color: "YELLOW", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
        // POI: In this case we are creating an object
        // return { color: "RED", area: 10 };
    }
    // POI: color in ISquareConfig is optional
    var returnedSquare = createSquare({ width: 100 });
    console.log(returnedSquare); //{ color: 'YELLOW', area: 10000 }
    var adhocSquare = { width: 10 };
    // POI: Individual properties are modifiable. This is possible because the property is not readonly
    adhocSquare.width = 80;
    // POI: 'color' is not part of the object definition because that has not been defined
    console.log(adhocSquare); //{ width: 80 }
    var pointInstance = { x: 10, y: 100 };
    // POI: Following throws exception because 'x' is readonly. So it is only allowed to be
    // modified during construction only
    // pointInstance.x = 20;
    console.log(pointInstance);
    // ITEM: Readonly Array
    var numArray = [10, 20, 30];
    // POI: Following is not valid because numArray is readonly/const. So another assignment is not allowed
    // numArray = [];
    // POI: Even though numArray is const all mutating operations except assignment is possible
    numArray.push(40, 50);
    console.log(numArray);
    var readonlyArray = numArray;
    console.log(readonlyArray);
    // POI: Following is not allowed because the array is readonly
    // readonlyArray[0] = 100;
    // POI: Though concat is allowed because concat doesn't modify the original array rather it returns a new array
    console.log(readonlyArray.concat(10));
    console.log(readonlyArray);
    var backToNormalArray = readonlyArray;
    console.log(backToNormalArray);
    // POI: push returns number of elements in the array pushing
    var arrayLength = backToNormalArray.push(500);
    console.log(backToNormalArray);
    var ConstProperty = (function () {
        // POI: Properties in class can not be const also. Only readonly is allowed for properties
        // const anotherNum: number;
        function ConstProperty(x) {
            this.num = x;
        }
        ConstProperty.prototype.go = function (x) {
            // POI: Not allowed because num property is readonly. So only assigning in it during
            // construction is allowed
            // this.num = x;
            return { num: this.num * this.num };
        };
        return ConstProperty;
    }());
    var instance = new ConstProperty(10);
    instance.go(20);
})(InterfaceOneOOne || (InterfaceOneOOne = {}));
