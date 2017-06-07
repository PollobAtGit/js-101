
function print(msg) {
    console.log(msg);
}

function Person() {

    //POI: Declared as 'var' NOT with 'this'. So it's a local variable NOT a property to 'this'
    var personName = "NO NAME";

    this.name = personName;

    //POI: This is what happens behind the scene when 'new' is used to get a new object
    return this;
}

var aPerson = new Person();

print(aPerson.name);//NO NAME
print(aPerson.personName === undefined);//true

function Dog() {

    //POI: 'this' is a implicit variable that is defined like this. It's prototype is set to reference this constructor's prototype
    //POI: The implicit variable is NOT simply an EMPTY object
    var obj = Object.create(Dog.prototype);

    obj.name = "NO NAME";

    //POI: Return the object. Note this is what happens when 'this' is used
    return obj;
}

Dog.prototype.makeSound = function () {
    return this.name + " !!";
}

var aDog = new Dog();
print(aDog.name);
print(aDog.makeSound());
print(aDog.prototype);

var anotherDog = new Dog();

//POI: Indicates prototype was properly set
print(anotherDog.makeSound === aDog.makeSound);//true
