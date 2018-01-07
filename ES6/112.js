
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

// POI: Object de structuring on nested object
const { name, age, an } = { name: 10, b: 20, name: "abc", age: 798, an: { k: undefined } };

// POI: [object Object] refers to the object created for 'an' above
cln(`${name} <= ${age} <= ${an}`);// abc <= 798 <= [object Object]

/**Object Destructuring (deep matching) */

// POI: Extracted property renaming
const { name: ng, age: ag, an: ank } = { a: 10, b: 20, name: "abc", age: 798, an: { k: undefined } };

cl(`${ng} || ${ag} || ${ank}`);// abc || 798

// POI: Extract nested porperty from nested object aka deep matching
const { an: { k: nested } } = { a: 10, b: 20, name: "abc", age: 798, an: { k: 'dan brown' } };
cl(`${nested}`);

// POI: Property names has not been extracted as the property name. Not renamed
const { an: { k } } = { a: 10, b: 20, name: "abc", age: 798, an: { k: 'dan brown' } };
cl(k);

// POI: Object de structuring with renaming, without renaming & deep matching
// POI: No matching value is found for a defined property then that variable will have undefined as value
const { a: outerProp, lk, c: { t: _nested } } = { a: 10, b: 20, lk: "abc", age: 798, c: { t: 'dan brown' } };
cl(`${outerProp} = ${lk} == ${_nested}`);// 10 = abc == dan brown

// POI: Defalt value of ff will be assigned because source object doesn't have property 'ff' but found (extractd) value of nn will be used
// as source object contains value for this property
const { def, ff = false, nn = false } = { def: 89, nn: true };
cln(`${def} ${ff} ${nn}`);// 89 false true
