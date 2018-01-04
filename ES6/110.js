
const cln = (x) => { console.log(); console.log(x); }
const cl = (x) => console.log(x);

const aSet = new Set();

// POI: For object Set() & Map() works based on referencial equality
aSet.add({ name: "nothing" });
aSet.add({ name: "something" });
aSet.add({ _name: "anotherString" });

// POI: This is OK because the first element is a different object (based on reference)
// POI: Value doesn't matter because equality is based on reference
aSet.add({ name: "nothing" });

const obj = { species: "Rhino" };
const copyOfObj = obj;

aSet.add(obj);

// POI: This will not include another value because 'copyOfObj' is same as 'obj' (referencially)
aSet.add(copyOfObj);

cl(aSet.size);
cl(aSet);
cl(aSet.has(copyOfObj));//true

// POI: Is checked based on reference
cl(aSet.has({ name: "nothing" }));//false

aSet.add(5);
aSet.add(5);

// POI: 5 is a value type so referencial equality doesn't matter
cl(aSet.has(5));//true

const weakSet = new WeakSet();

weakSet.add(obj);
// weakSet.add(20.23);
// weakSet.add("Weak Set");

cln(weakSet.has(obj));//false
cl(weakSet);

/**ES6 Class */

class Shape {
    constructor(id, x, y) {

        // POI: Because id is attached with 'this' so those properties are public
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {

        // POI: x & y is attached with 'this' so they are public properties
        this.x = x;
        this.y = y;
    }

    moveFromXY() {
        console.log(`X: ${this.x} => Y: ${this.y} => Id: ${this.id}`);
    }
}

const aShape = new Shape(10, 20, 30);

cln(aShape.id);
cl(aShape.x);
cl(aShape.y);

cln(aShape);// Shape { id: 10, x: 20, y: 30 }

aShape.moveFromXY();// X: 20 => Y: 30 => Id: 10

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }

    printRadius() {
        console.log(`Radius => ${this.radius}`);
    }
}

const aCircle = new Circle(50.23, 60.23, 70.23, 100);
aCircle.moveFromXY();
aCircle.printRadius();

/**ES5 Way */

const Rectangle = function (id) { this.id = id; }

Rectangle.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

const aRectangle = new Rectangle(`${aShape.id}`);
aRectangle.move(45, 89);

cln(aRectangle);// Rectangle { id: '10', x: 45, y: 89 }

const Polygon = function (id, x, y, radius) {

    // POI: Equivalent to invoking super()
    Rectangle.call(this, id);

    // POI: this.move will be available dynamically because Polygon.prototype is being set as Rectangle.prototype where 'move' is defined
    this.move(x, y);
    this.radius = radius;
}

// POI: Prototypical inheritence working here
Polygon.prototype = Object.create(Rectangle.prototype);

// POI: During setting protoype constructor property of prototype will also be overridden. So overwrite that with the proper
// constructor function
Polygon.prototype.constructor = Polygon;

Polygon.prototype.printEverything = function () { console.log(`${this.radius} => ${this.x} => ${this.y} => ${this.id}`); }

const aPloygon = new Polygon(78, 89, 50, 100);

aPloygon.printEverything();
