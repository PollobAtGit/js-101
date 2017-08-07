
let anyType: any = "10";

// POI: Type conversion is applicable only for variables of type 'any'
let num: number = (anyType as number);

console.log(anyType);
console.log(num);

let numStr: string = "100";
let anotherNum: number = Number(numStr);//JS way of conversion
console.log(anotherNum);

// POI: Converting
console.log(("2032" as any) as number);

// POI: Using 'as' is not safe apparently
console.log(("SM" as any) as number);//Output doesn't make any sense
console.log(({} as any) as number);//Output doesn't make any sense

// POI: Accessing a variable before declaration is valid in JS because variable hoisting is performed
console.log(jsVar);
var jsVar = 150;
console.log(jsVar);

// POI: Not valid because tsVar is a type script variable & it has to be declared before usage
// console.log(tsVar);
let tsVar: number = 10;

// POI: Exception because invoke is not defined here
// console.log(invoke());

let invoke = function (s: Array<string>) {
    let k: number[] = [0];

    // POI: Not allowed because 'k' is already defined. Multiple declaration of a variable in the same scope is not allowed
    // let k : string = "";

    // POI: Not valid because s is defined as function argument
    // let s = 10;

    return num;
}

// let invokeAnother = function() {
//     // POI: Not valid because s is not defined locally or globally
//     return s;
// }

let conditonalInvoke = function (isTrue: boolean, x: number) {
    if (isTrue) {

        // POI: This x declaration will shadow the 'x' from function argument (in contrast to C# which doesn't allow to declare variable inside inner block with the same name)
        let x = 50;
        return x;
    }
    return x + 10;
}

console.log(conditonalInvoke(true, 20));//50
console.log(conditonalInvoke(false, 20));//30

let theCityAlwaysSleeps = function (isTrue: boolean) {
    let invoke;

    if (isTrue) {
        invoke = function () {
            return 10 + 10;
        }
    }

    // POI: Obviously it's accessible here
    return invoke;
}

console.log(theCityAlwaysSleeps(true)());

// TODO: Is it enough to use double equal in TS?
console.log(theCityAlwaysSleeps(false) == undefined);//true

let famousSetTimeout = function () {
    for (var i = 0; i < 5; i = i + 1) {

        (function (s) {
            setTimeout(function () {
                console.log(s);
            }, 1000)
            // POI: Need to pass the variable to make a distinct variable in a different scope
        })(i);
    }
}

famousSetTimeout();

let famousSetTimeoutTs = function () {
    for (let i = 0; i < 5; i = i + 1) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}

famousSetTimeoutTs();

const numLiveForCat = 10;
const kitty = {
    name: "Auro",
    numLives: numLiveForCat
};

console.log(kitty);

// POI: const works properly for objects also
// kitty = {
//     s : ""
// };

// MI: const object in TS is almost like a readonly list in C#

// POI: const doesn't allow an object to re-assigned but every individual
// porperty can be modified. So individual properties are not immutable
kitty.name = "MODIFIED";
kitty.numLives = 20;

// POI: New properties can be added too into a const object
kitty["s"] = "Added property";

let oneObj = {};

// POI: Apparently TS doesn't allow properties to be added using dot syntax
// But only bracket syntax
oneObj["s"] = "Added property";

console.log(kitty);
console.log(oneObj);

let numArray: Array<number> = [10, 596, 89];

// POI: Using tuple for Array de-structuring
let [numOne, numTwo, numThree] = numArray;

console.log(`${numOne} : ${numTwo} : ${numThree}`);

// POI: dNum will hold the first element in the array
let [dNum] = numArray;
console.log(dNum);//10

let [, anDNum,] = numArray;
console.log(anDNum);//596

// POI: Using spread operator to capture all the other nums
// POI: Works in head & tail fashion
let [first, ...last] = numArray;
console.log(`${first} :: ${last}`);// 10 :: 596,889

// POI: Getting the last element
let [, , lNum] = numArray;

console.log(lNum);

// POI: Tuple as function argument allows developer to pass array as well
// as a tuple
let addDeconstructedArrayElement = function ([first, last]: [number, number]) {
    return first + last;
};

console.log(addDeconstructedArrayElement([10, 20, 30]));//30
console.log(addDeconstructedArrayElement([40, 50]));//90

// POI: Risky! Better to specify types in the tuple
// console.log(addDeconstructedArrayElement(["", {}]));

// POI: The gap indicates we are not interested in the middle element
let addFirstAndLastArrayElements = function ([first, , last]: [number, number, number]) {
    return first + last;
};

console.log(addFirstAndLastArrayElements([0, 2, 3]));//3

// POI: '...' here will get rest of the array elements
// TODO: Why ': [number, number[]]' doesn't work as Type definition?
let addArrayElements = function ([first, ...last]) {

    // POI: Using Arrow function
    return first + last.reduce((sum: number, curr: number) => sum + curr, 0);
};

console.log(addArrayElements([10, 5, 6, 89]));//110

// TODO: const on Array
