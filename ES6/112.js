
const cln = (x) => { console.log(); console.log(x); }
const cl = (x) => console.log(x);

/**Array Destructuring */

const anArray = [1, 2, 3, 4];

// POI: After de construction value '2' from the array will not be hold in any variable
const [a, , b, c] = anArray;

cl(anArray);
cl(`${a}, ${b}, ${c}`);

function resting(...args) { cl(args); }

// POI: anArray is passed as the first parameter
resting(anArray);// [ [ 1, 2, 3, 4 ] ]

// POI: Now the array will be flattened first & then will be attached as the argument to the function
// POI: Number of arguments in function 'resting' is equal to the number of elements in the array
resting(...anArray);// [ 1, 2, 3, 4 ]

// POI: Note the tuple as argument
// POI: Function tupling doesn't have 3 arguments rather it has only one argument that's a tuple
function tupling([aa, , bb, cc]) { cl(`${aa}, ${bb}, ${cc}`); }

tupling(anArray);// 1, 3, 4

/**Object Destructuring */

const [name, , age] = { name: "none", city: "xyz", age: 56 }

