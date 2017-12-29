var cl = function (v) { return console.log(v); };
var OneZeroFive;
(function (OneZeroFive) {
    var Animal = (function () {
        function Animal(isAlive) {
        }
        // POI: For checking type compatibility methods are also required to match
        // POI: Following will make Animal incompatible with Rhino if Rhino doesn't have the same member
        // getSpecies(): string { return this.species; }
        // POI: Static members are not considered for type compatibility checking
        // POI: getSpecies IS being declared as a function in JS
        Animal.getSpecies = function () { };
        return Animal;
    }());
    var Rhino = (function () {
        function Rhino() {
        }
        return Rhino;
    }());
    var anAnimal = new Animal(true);
    // POI: Animal is compatible with Rhino even though their constructors are not compatible
    // POI: Constructors are not considered for compatibility checking
    // POI: static members are not considered for type compatibility checking
    var aRhino = new Rhino();
    var Color;
    (function (Color) {
        Color[Color["RED"] = 0] = "RED";
        Color[Color["BLUE"] = 1] = "BLUE";
    })(Color || (Color = {}));
    var Snake = (function () {
        function Snake(isPoisonous, bodyColor) {
            // POI: Not eyeColor is literally being declared in JS
            this.eyeColor = bodyColor;
        }
        return Snake;
    }());
    // This is awesome!
    // POI: Essentially it's like aWeirdAnimal is actually a object instance of a type that has inherited from all
    // of the three types
    var aWeirdAnimal = { species: "", eyeColor: Color.BLUE, hasLongHorn: false };
    cl(aWeirdAnimal);
    function extend(t, u) {
        var mixin = {};
        for (var prop in t) {
            mixin[prop] = t[prop];
        }
        for (var prop in u) {
            // POI: At this time mixin contains some properties & possibly the one that we are going to entry
            // POI: This implementation is essentially in developers hand. It might be desirable to over write
            // POI: Also we can keep a copy of the duplicate property
            if (!mixin.hasOwnProperty(prop)) {
                mixin[prop] = u[prop];
            }
        }
        return mixin;
    }
    var anotherWeirdAnimal = extend(new Rhino(), new Snake(true, Color.BLUE));
    cl(new Rhino());
    cl(new Snake(true, Color.BLUE));
    cl(anotherWeirdAnimal);
})(OneZeroFive || (OneZeroFive = {}));
