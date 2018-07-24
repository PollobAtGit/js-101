const m = new Map();

m.set("op", { val: 56 });
m.set(1, 5);

console.log(m);
console.log(Array.from(m));// [ [ 'op', { val: 56 } ], [ 1, 5 ] ]

// Acording to Airbnb style guide line the following is better
console.log([...m]);// [ [ 'op', { val: 56 } ], [ 1, 5 ] ]

// POI: making a shallow copy of the original array is possible using .slice(0)
// but that works only for arrays and array-like objects
console.log([...m].slice(0));

function i_have_arguments() {
    // return arguments; // { '0': 1, '1': 2, '2': 3 }
    return Array.prototype.slice.call(arguments); // [ 1, 2, 3 ]
}

console.log(i_have_arguments(1, 2, 3));// 1, 2, 3

// POI: .slice(...) doesn't work on Map
console.log(Array.prototype.slice.call(m));

const s = new Set();

s.add(1);
s.add(2);

console.log(s);

// POI: .slice(...) doesn't work on Set()
console.log(Array.prototype.slice(s));

console.log();

// POI: All of the below approaches create a shallow copy of the 
// original array/iterable/array like object

console.log(Array.from(m));
console.log(Array.from(s));
console.log(Array.from([56, 78]));
console.log([...m]);
console.log([...s]);
console.log([...[78, 9]]);


// POI: .slice(...) only works on arrays
