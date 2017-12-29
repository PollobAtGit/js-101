
const cl = (v: any) => console.log(v);

namespace OneZeroFive {

    class Animal {

        // POI: species is NOT being declared as a property in JS
        species: string;

        constructor(isAlive: boolean) { }

        // POI: For checking type compatibility methods are also required to match
        // POI: Following will make Animal incompatible with Rhino if Rhino doesn't have the same member
        // getSpecies(): string { return this.species; }

        // POI: Static members are not considered for type compatibility checking
        // POI: getSpecies IS being declared as a function in JS
        static getSpecies(): void { }

        // POI: Static members (both method & porperties) are ignored when checking for type compatibility
        static count: number;
    }

    class Rhino {

        // POI: species is NOT being declared as a property in JS
        species: string;

        // hasLongHorn is NOT being declared as a porperty in JS
        hasLongHorn: boolean;

        constructor() { }
    }

    const anAnimal: Animal = new Animal(true);

    // POI: Animal is compatible with Rhino even though their constructors are not compatible
    // POI: Constructors are not considered for compatibility checking
    // POI: static members are not considered for type compatibility checking
    const aRhino: Animal = new Rhino();

    enum Color { RED, BLUE }

    class Snake {

        // POI: species is not being declared as a porperty in JS
        species: string;

        // POI: eyeColor is not being declared as a property in JS
        eyeColor: Color;

        constructor(isPoisonous: boolean, bodyColor: Color) {

            // POI: Not eyeColor is literally being declared in JS
            this.eyeColor = bodyColor;
        }
    }

    // POI: Intersection type
    type WeirdAnimalType = Animal & Rhino & Snake;

    // This is awesome!
    // POI: Essentially it's like aWeirdAnimal is actually a object instance of a type that has inherited from all
    // of the three types
    const aWeirdAnimal: WeirdAnimalType = { species: "", eyeColor: Color.BLUE, hasLongHorn: false };

    cl(aWeirdAnimal);

    function extend<T, U>(t: T, u: U): T & U {

        let mixin = {} as T & U;

        for (const prop in t) { (mixin as T)[prop] = t[prop]; }

        for (const prop in u) {

            // POI: At this time mixin contains some properties & possibly the one that we are going to entry
            // POI: This implementation is essentially in developers hand. It might be desirable to over write
            // POI: Also we can keep a copy of the duplicate property

            if (!mixin.hasOwnProperty(prop)) { (mixin as U)[prop] = u[prop]; }
        }

        return mixin;
    }

    const anotherWeirdAnimal: WeirdAnimalType = extend(new Rhino(), new Snake(true, Color.BLUE));

    cl(new Rhino());
    cl(new Snake(true, Color.BLUE));
    cl(anotherWeirdAnimal);
}
