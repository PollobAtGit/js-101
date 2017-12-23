var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OneZeroThree;
(function (OneZeroThree) {
    var Rhino = (function () {
        function Rhino() {
        }
        return Rhino;
    }());
    // POI: Inferred type is not 'any' rather an object having property species & isAlive
    var aRhino = { species: "Rhino", isAlive: true };
    // POI: Following is not valid because apparently in typescript object literal can specify only known properties
    // const anAnimald: Animal = { species: "Rhino", isAlive: true };
    // KFU!
    // POI: Interestingly following is valid though essentially aRhino has properties
    // {species: string, isAlive: boolean}
    var anAnimal = aRhino;
    // POI: It's valid because Rhino has everything that Animal requires
    var anotherAnimal = new Rhino();
    // POI: Declaration that animalSound only takes objects of Animal type indicates that any object that has
    // properties similar (in terms of name & type of the property) to what Animal has can be passed as argument
    var animalSound = function (anAnimal) { return console.log(anAnimal.species ? anAnimal.species : "DUMMY"); };
    var anotherRhino = new Rhino();
    anotherRhino.species = "Another Rhino";
    animalSound(anotherRhino);
    // POI: This assignment is valid because the object has the at least necessary property 'species' of type string
    // POI: In case of object literals, to assign a object to a type of Animal the object can not have extra
    // properties & obviously not less properties.
    animalSound({ species: "Lion" /*, isAlive: false*/ });
    // POI: But in case of class instance assignment the object can have extra properties
    animalSound(aRhino);
    animalSound(new Rhino());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Snake;
    }(Rhino));
    // POI: Structural typing works also in case of inheritance. Snake has 'species' via Rhino which matches with
    // the property name & type of Animal
    var aWeirdAnimal = new Snake();
    animalSound(aWeirdAnimal);
    var oneFunc = function (x) { return 0; };
    // POI: Argument list contains argument z & y. Note the variable name is different
    var anotherFunc = function (z, y) { return 0; };
    // POI: Functions with lower number of arguments are assignable to functions required to have more arguments
    // Rationale is valid because function expecting less arguments for surely will not process the extra argument
    // But the function expecting more arguments will definately process the value of the given argument value
    var dummyFunc = oneFunc;
})(OneZeroThree || (OneZeroThree = {}));
// Important: While figuring out whether a value of some type is assignable or not to another variable of some
// other type typescript considers only the property names & types of the properties
// IMPORTANT: During assignment, only target type's property names & types are considered
// IMPORTANT: In case of function assignment, typescript requires that left operand of the assignment operator must
// have equal or more arguments which is the OPPOSITE of what happens in case of structural typing for objects
