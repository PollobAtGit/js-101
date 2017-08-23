
let evens = [10, 56, "New", "102"];

console.log(evens.map(el => el + " El"));

// POI: Note the parenthesis after & beginning of the object literal notation
const pairs = evens.map(el => ({ value: el, toString: el.toString() }));

console.log(pairs);

// POI: 2nd index i provides index
const nums = evens.map((v, i) => v + " || " + i);
console.log(nums);

// POI: The parenthesis around the object literal notation is a requirement. Otherwise it wont work properly
// POI: Note this is not Expression body
const transformed = evens.map(v => ({ num: v }));
console.log(transformed);

// POI: Using expression body

const numsTwo = [];

evens.forEach(v => {
    if (typeof v !== 'string') {
        numsTwo.unshift(v);
    }
});

console.log(numsTwo);

// POI: Arrow function doesn't have 'this' associated with it
console.log(evens.map(v => this));//[{}, ....]

class Animal {
    constructor() {
        this.name = "A";
    }

    get numbers() {
        let evens = [10, 56, "New", "102"];

        // POI: this inside arrow function refers to the object not the function itself
        return evens.map(v => (typeof v === 'number') ? (v + " => " + this.name) : "");
    }

    // POI: Default parameter
    sayMyName(name = "Animal") {
        return `I am ${name}`;
    }
}

// POI: Getter is used as property not as function/method
console.log(new Animal().numbers);
console.log(new Animal().sayMyName());
console.log(new Animal().sayMyName("SOME"));

{
    function foo() {
        return 1;
    }

    console.log(foo() == 1);

    // POI: Creating a new scope
    {
        // POI: This foo is not the same as foo from above
        function foo() {
            return 2;
        }

        console.log(foo() == 2);
    }

    // POI: This foo is the same as the original foo
    console.log(foo() == 1);
}

// POI: Alternative way to define block scope
(function () {

})();

function f(x, y = 7, z = 42) {
    return x + y + z;
}

// POI: Provided value maps to 'x' & has value 1
console.log(f(1));//50

// POI: z is an Array. Literally
function anotherF(x, y, ...z) {
    return x + y + z.length;
}

// POI: z gets [5, 3, 120]
console.log(anotherF(1, 2, 5, 3, 120));//6

function otherF() {
    // POI: Rest argument is used as a shortcut for applying slice on arguments
    return Array.prototype.slice.call(arguments);
}

console.log(otherF(10, "4", "OP"));
console.log(otherF(10, "4", "OP").length);
console.log(otherF(10, "4", "OP").find(v => typeof v === 'number'));

// POI: find returns the first element that matches the predicate
console.log(otherF(10, {}, "OP").find(v => typeof v === 'string'));

// POI: push returns the number of elements after pushing
evens.push([10, 235]);
console.log(evens);

// POI: concat returns a new array other than modifying the original array
// POI: concat flattens the first level of elements
console.log(evens.concat([30, 2, ["A"]]));

// POI: An array with two elements
const x = [evens, [202]];
console.log(x);
console.log(x.length);

// spread is literally flattening

// POI: events concat + 5689
const others = [...evens, 5689];

console.log(others);

function y(a, b, ...params) {
    console.log(params);
    return a + b + params.length;
}

// POI: ...others doesn't pass an Array rather it flattens the array then passes as seperate arguments
console.log(y(10, 20, ...others));

// POI: This passes an Array
console.log(y(10, 20, others));