
namespace OneZeroThree {

    interface Animal { species: string }
    class Rhino { species: string; isAlive: boolean }

    // POI: Inferred type is not 'any' rather an object having property species & isAlive
    const aRhino = { species: "Rhino", isAlive: true };

    // POI: Following is not valid because apparently in typescript object literal can specify only known properties
    // const anAnimald: Animal = { species: "Rhino", isAlive: true };

    // KFU!
    // POI: Interestingly following is valid though essentially aRhino has properties
    // {species: string, isAlive: boolean}
    const anAnimal: Animal = aRhino;

    // POI: It's valid because Rhino has everything that Animal requires
    const anotherAnimal: Animal = new Rhino();

    // POI: Declaration that animalSound only takes objects of Animal type indicates that any object that has
    // properties similar (in terms of name & type of the property) to what Animal has can be passed as argument

    const animalSound = (anAnimal: Animal): void => console.log(anAnimal.species ? anAnimal.species : "DUMMY");

    const anotherRhino = new Rhino();
    anotherRhino.species = "Another Rhino";

    animalSound(anotherRhino);

    // POI: This assignment is valid because the object has the at least necessary property 'species' of type string
    // POI: In case of object literals, to assign a object to a type of Animal the object can not have extra
    // properties & obviously not less properties.
    animalSound({ species: "Lion"/*, isAlive: false*/ });

    // POI: But in case of class instance assignment the object can have extra properties
    animalSound(aRhino);
    animalSound(new Rhino());

    class Snake extends Rhino { isPoisonous: boolean; }

    // POI: Structural typing works also in case of inheritance. Snake has 'species' via Rhino which matches with
    // the property name & type of Animal
    const aWeirdAnimal: Animal = new Snake();
    animalSound(aWeirdAnimal);

    const oneFunc = (x: number): number => 0;

    // POI: Argument list contains argument z & y. Note the variable name is different
    const anotherFunc = (z: number, y: number): number => 0;

    // POI: Functions with lower number of arguments are assignable to functions required to have more arguments
    // Rationale is valid because function expecting less arguments for surely will not process the extra argument
    // But the function expecting more arguments will definately process the value of the given argument value
    const dummyFunc: XY = oneFunc;
    // const dummyFuncTwo: (x: number): number => 0 = anotherFunc;

    // POI: type definition is being hoisted
    type XY = (x: number, y: number) => number;
}

// Important: While figuring out whether a value of some type is assignable or not to another variable of some
// other type typescript considers only the property names & types of the properties

// IMPORTANT: During assignment, only target type's property names & types are considered

// IMPORTANT: In case of function assignment, typescript requires that left operand of the assignment operator must
// have equal or more arguments which is the OPPOSITE of what happens in case of structural typing for objects
