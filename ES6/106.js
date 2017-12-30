
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
const iF = Number.isFinite;

cln(iNn(NaN));//true
cl(iNn(0));//false

// POI: Infinity/-Infinity are not NaN
cl(iNn(Infinity));//false
cl(iNn(-Infinity));//false

// POI: Number.isNaN solves the problem with global isNaN
cl(iNn("nan"));//false
cl(iNn({}));//false

// KFU!
cln(isNaN("d"));//true

// POI: Number.isFinite returns true only for number that is finite (except Infinity, -Infinity, NaN)
cln(iF("number"));//false
cl(iF(123));//true
cl(iF({}));//false
cl(iF(true));//false
cl(iF(undefined));//false
cl(iF(null));//false
cl(iF(NaN));//false
cl(iF(Infinity));//false
cl(iF(-Infinity));//false

/**isFinite & isNan utility */

// POI: It's enough to check equality on the value because unique characteristic of NaN is it doesn't
// equal to anything not even to NaN itself
const isNan = (x) => x !== x;
const isFinite = (x) => typeof x === "number" && x !== Infinity && x !== -Infinity && !Number.isNaN(x);

// POI: NaN doesn't equal NaN itself. Everything else equals to that value itself
cln(NaN === NaN);//false

// POI: Infinity behaves properly in comparison with other Infinity value
cln(Infinity === Infinity);//true
cl(-Infinity === -Infinity);//true
cl(Infinity === -Infinity);//false
cl(Infinity !== -Infinity);//true

cln(NaN === Infinity);//false
cl(NaN !== Infinity);//true

/**None of NaN or Infinity or -Infinity are reserved words so they can be overridden */
/**Not globally but locally it can be done */

(function () {

	// POI: local NaN will overshadow the global NaN
	const NaN = undefined;

	// POI: Number.NaN is a constant so any attempt to write this variable's value will have no impact
	Number.NaN = undefined;

	// POI: But it will have impact if there's a local object named 'Number' as follows
	// const Number = { NaN: undefined };

	// POI: Following assignment has no impact like before because NaN property in Window object is constant
	// NaN = undefined;

	// POI: False because NaN is overridden here with undefined
	cln(isNan(NaN));//false

	// POI: Constant NaN in Number has not been overridden or properly shadowed so it works properly
	cl(isNan(Number.NaN));//true
})()

// Important: If for some reason global properties like NaN or Infinity/-Infinity is required to be used
// it's better to access them like window.Number.NaN or window.Number.POSITIVE_INFINITY or window.Number.
// NEGATIVE_INFINITY (assuming browser hosted application)
// Because those values are constant & any attempt to override the value will have no impact but in local
// scope we can create a variable naming NaN or Infinity or Number (having properties NaN,
// POSITIVE_INFINITY, NEGATIVE_INFINITY) which will shadow the global object & will result unexpected value
