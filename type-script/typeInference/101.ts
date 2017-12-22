
namespace TypeInference {

    // POI: In strictNullCheck 'false' mode typescript infers the best type that can hold all values
    // Both of below cases typescript uses union operator to combine two types
    const array = [0, 1, null];// (number | null)
    const arrayOne = ["ONE", 1];// (number | string)

    class Animal { }
    class Rhino extends Animal { }
    class Snake extends Animal { }
    class Lion extends Animal { }

    // KFU!
    // POI: Inferred type is not Animal[]. Ok but why it's not union type of Rhino, Snake & Lion?
    // POI: In such situations it's better to explicitly mention the base type for readability
    const animals = [new Rhino(), new Snake(), new Lion()];//Rhino[]

    // POI: Better because typescript can't infer the base class
    const otherSetOfAnimals: Animal[] = [new Rhino(), new Snake(), new Lion()];

    interface Compiler { }
    interface HtmlTag { }

    class JavaCompiler implements Compiler { }
    class HtmlInputElement implements HtmlTag { public X: number }

    // KFU!
    // POI: Why not union type?
    // POI: Chosing JavaCompiler is straight wrong because HtmlInputElement has an extra element 'X' so no instance
    // of HtmlInputElement can be placed in a variable of type JavaCompiler
    const miscellaneous = [new JavaCompiler(), new HtmlInputElement()];// JavaCompiler

    // POI: Typescript inferred the type of mouseEvent from the usage of window.onmousedown
    // POI: This is called contextual type inference
    window.onmousedown = (e) => console.log(e);
}

// In typescript polymorphism doesn't really work not even in case of type inference