function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// Add property to class 'Cat'
Cat.prototype.meow = function() {
    console.log( "Meow!" );
};

cheshire.meow();
gary.meow();