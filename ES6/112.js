
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

// POI: Following will not de structure the object properties because names on the left hand is not the same as the properties in
// the right hand side
// POI: Object destructuring is done based on property names
// POI: Second brace is used rather than third brace for object destructuring
const { n, bc, ba } = { name: "none", city: "xyz", age: 56, country: "not known" };
cln(`${n} | ${bc} | ${ba}`);// undefined | undefined | undefined

const { propOne, propTwo } = { name: "none", propOne: "xyz", age: 56, propTwo: "not known" };
cln(`${propOne} | ${propTwo}`);// xyz | not known

// IMPORTANT: In Array de structuring we can simply skip mentioning a variable in a place to skip storing
// some value
// IMPORTANT: Object de structuring works based on property name matching. So we don't need to have a placeholder
// if we want to skip storing some property values

