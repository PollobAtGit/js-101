function Animal ( name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName  = function() {
    console.log( "Hi my name is " + this.name );
};

var penguin = new Animal("Captain Cook", 2);
penguin.sayName();