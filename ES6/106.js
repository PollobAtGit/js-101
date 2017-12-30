
const cl = (x) => console.log(x);
const cln = (x) => { console.log(); console.log(x) };

/**String repetition */

const org = "S".repeat(5);

cl(org);

// POI: Traditional approach to repeat a string n times
// POI: Creating an array with 5 elements all of which are undefined
// POI: Using Array function. It's same as 'new Array(n)'
cl(Array(5).join("foo"));

// POI: Create placeholder for 5 elements but value in those placeholders will be 'undefined'
cl(Array(5));
cl(Array(5)[0]);//undefined

// POI: join can deal with undefined & null. It treats null & undefined as empty
cl([undefined, undefined].join("UNDEFINED"));
cl([undefined, null].join("null/undefined"));
cl([null, null].join("null"));

/**String searching */

cln("hello".startsWith("he"));//true
cl("hello".startsWith("llo"));//false

cln("hello".endsWith("lo"));//true
cl("hello".endsWith("h"));//false

cln("hello".includes("ll"));//true
cl("hello".includes("ho"));//false
cl("hello".includes("eo"));//false

/**String search for whitespace */

// Indentation done using tab (/t)
cln("	dummy".startsWith(" "));//false

// Searching with 4 spaces rather than single tab (/t)
cl("	dummy".startsWith("    "));//false


// Searching with a single tab (/t)
cl("	dummy".startsWith("	"));//true

// Searching with multiple tabs (/t)
cl("	dummy".startsWith("		"));//false

// Searching with new line (/n)
cln(`
dummy`.startsWith(`
`));//true

// Searching with multiple new lines
cl(`
dummy`.startsWith(`

`));//false

cln(`du
mmy`.includes(`
`));//true

cln(`dummy`.includes(null));//false
cl(`dummy`.includes(undefined));//false
cl(``.includes(null));//false
cl(``.includes(undefined));//false

/**Number Type Checking */

const iNn = Number.isNaN;
const isF = Number.isFinite;

cln(iNn(NaN));//true
cl(iNn(0));//false

// POI: Infinity/-Infinity are not NaN
cl(iNn(Infinity));//false
cl(iNn(-Infinity));//false

// POI: Number.isNaN solves the problem with global isNaN
cl(iNn("nan"));//false

// KFU!
cln(isNaN("d"));//true
