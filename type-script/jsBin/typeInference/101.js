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
var TypeInference;
(function (TypeInference) {
    // POI: In strictNullCheck 'false' mode typescript infers the best type that can hold all values
    // Both of below cases typescript uses union operator to combine two types
    var array = [0, 1, null]; // (number | null)
    var arrayOne = ["ONE", 1]; // (number | string)
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Rhino;
    }(Animal));
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Snake;
    }(Animal));
    var Lion = (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animal));
    // KFU!
    // POI: Inferred type is not Animal[]. Ok but why it's not union type of Rhino, Snake & Lion?
    // POI: In such situations it's better to explicitly mention the base type for readability
    var animals = [new Rhino(), new Snake(), new Lion()]; //Rhino[]
    // POI: Better because typescript can't infer the base class
    var otherSetOfAnimals = [new Rhino(), new Snake(), new Lion()];
    var JavaCompiler = (function () {
        function JavaCompiler() {
        }
        return JavaCompiler;
    }());
    var HtmlInputElement = (function () {
        function HtmlInputElement() {
        }
        return HtmlInputElement;
    }());
    // KFU!
    // POI: Why not union type?
    // POI: Chosing JavaCompiler is straight wrong because HtmlInputElement has an extra element 'X' so no instance
    // of HtmlInputElement can be placed in a variable of type JavaCompiler
    var miscellaneous = [new JavaCompiler(), new HtmlInputElement()]; // JavaCompiler
    // POI: Typescript inferred the type of mouseEvent from the usage of window.onmousedown
    // POI: This is called contextual type inference
    window.onmousedown = function (e) { return console.log(e); };
})(TypeInference || (TypeInference = {}));
// In typescript polymorphism doesn't really work not even in case of type inference 
