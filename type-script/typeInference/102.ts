
namespace OneZeroTwo {

    interface Animal { species: string; /*isAlive: boolean;*/ }

    // POI: None of Snake & Rhino extends Animal
    class Snake { species: string; }
    class Rhino { species: string; hasHorn: boolean }

    interface ElectricalDevice { isHomeAppliance: boolean }

    // POI: Valid assignment because Snake has every member that Animal needs/has
    // POI: Parenthesis after 'new typeName' is not required!
    const anAnimal: Animal = new Snake;

    // POI: Animal & Rhino has similar (almost) structure. Both have 'species'. For structural typing it
    // doesn't matter that 'Rhino' has an additional member (hasHorn) too.
    // POI: Rhino MUST have all the members that Animal requires
    const anotherAnimal: Animal = new Rhino();

    // POI: Not valid because ElectricalDevice has different type structure than Snake
    // POI: Importantly, ElectricalDevice has an member that Snake doesn't have
    // const device: ElectricalDevice = new Snake();
}

// Important: Typescript relies on structural typing