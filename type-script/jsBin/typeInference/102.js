var OneZeroTwo;
(function (OneZeroTwo) {
    // POI: None of Snake & Rhino extends Animal
    var Snake = (function () {
        function Snake() {
        }
        return Snake;
    }());
    var Rhino = (function () {
        function Rhino() {
        }
        return Rhino;
    }());
    // POI: Valid assignment because Snake has every member that Animal needs/has
    // POI: Parenthesis after 'new typeName' is not required!
    var anAnimal = new Snake;
    // POI: Animal & Rhino has similar (almost) structure. Both have 'species'. For structural typing it
    // doesn't matter that 'Rhino' has an additional member (hasHorn) too.
    // POI: Rhino MUST have all the members that Animal requires
    var anotherAnimal = new Rhino();
    // POI: Not valid because ElectricalDevice has different type structure than Snake
    // POI: Importantly, ElectricalDevice has an member that Snake doesn't have
    // const device: ElectricalDevice = new Snake();
})(OneZeroTwo || (OneZeroTwo = {}));
// Important: Typescript relies on structural typing 
