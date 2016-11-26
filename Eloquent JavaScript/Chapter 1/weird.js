console.log("3 > 2 => " + (3 > 2));
console.log("\n3 < 2 => " + (3 < 2));

console.log("\nAardvark > Zoroaster => " + ("Aardvark" > "Zoroaster"));
console.log("\nsublime !== sublime => " + ("sublime" !== "sublime"));
console.log("\nsublime === Sublime => " + ("sublime" === "Sublime"));
console.log("\nsublime !== Sublime => " + ("sublime" !== "Sublime"));

//POI #1:

/***********************************************************************************************/
/**************************** Comparison for null & undefined **********************************/
/***********************************************************************************************/

console.log();
console.log("/** Comparison for null & undefined **/");
console.log();

console.log("Exact comparison");
console.log("\nnull === undefined => " + (null === undefined));
console.log("null !== undefined => " + (null !== undefined));

console.log("\nComparison with type coercion (implicit conversion)");

console.log("\nnull == undefined => " + (null == undefined));
console.log("null != undefined => " + (null != undefined));

//POI #2: In case of type coercion, null & undefined are considered same

/***********************************************************************************************/
/************************* Equality comparison of falsy value **********************************/
/***********************************************************************************************/

console.log();
console.log("/** Equality comparison of falsy value **/");
console.log();

console.log("Exact comparison");
console.log("\n(0 === false) => " + (0 === false));
console.log("('' === false) => " + ('' === false));
console.log("(null === false) => " + (null === false));

console.log("\nComparison with type coercion (implicit conversion)");
console.log("\n(0 == false) => " + (0 == false));
console.log("('' == false) => " + ('' == false));
console.log("(null == false) => " + (null == false));

//POI #3:

/***********************************************************************************************/
/************************* Falsy Behavior of 0/EMPTY/null **************************************/
/***********************************************************************************************/

console.log();
console.log("/** Falsy Behavior of 0/EMPTY/null **/");
console.log();

var aNameSpace = aNameSpace || {};

aNameSpace.zero = 0;
aNameSpace.empty = '';
aNameSpace.nullValue = null;
aNameSpace.undefinedValue = undefined;
aNameSpace.nanValue = NaN;

if (!aNameSpace.zero) console.log("VALUE IS NOT VALID");
if (!aNameSpace.empty) console.log("VALUE IS NOT VALID");
if (!aNameSpace.nullValue) console.log("VALUE IS NOT VALID");
if (!aNameSpace.undefinedValue) console.log("VALUE IS NOT VALID");
if (!aNameSpace.nanValue) console.log("VALUE IS NOT VALID");

//None of the following statements will execute because 0/EMPTY/NULL results in false
if (aNameSpace.zero) console.log("VALUE IS VALID");
if (aNameSpace.empty) console.log("VALUE IS VALID");
if (aNameSpace.nullValue) console.log("VALUE IS VALID");
if (aNameSpace.undefinedValue) console.log("VALUE IS VALID");
if (aNameSpace.nanValue) console.log("VALUE IS VALID");

//POI #4: To check whether a variable contains valid object or not it's sufficient check via 'if'

/***********************************************************************************************/
/************************* Are All Falsy Values Equal To false *********************************/
/***********************************************************************************************/

console.log();
console.log("/** Are All Falsy Values Equal To false **/");
console.log();

console.log("(null == false) => " + (null == false));
console.log("(undefined == false) => " + (undefined == false));
console.log("(NaN == false) => " + (NaN == false));

//Seriously ?
console.log("(0 == false) => " + (0 == false));
console.log("('' == false) => " + ('' == false));

//POI #5: Even though POI#4 shows 'if' conditioning on these falsy values results 'false' this section
//shows that null/undefined/NaN aren't really 'false' though 0 & '' are false (!!!!!)

/***********************************************************************************************/
/***************************** Fall Back Approach **********************************************/
/***********************************************************************************************/

console.log();
console.log("/** Fall Back Approach **/");
console.log();

checkFallbackApproach({});
checkFallbackApproach(null);
checkFallbackApproach(70);
checkFallbackApproach(undefined);
checkFallbackApproach('');
checkFallbackApproach(0);
checkFallbackApproach(false);
checkFallbackApproach(true);
checkFallbackApproach(NaN);

//POI #6: If the first operand is falsy then second operand is returned otherwise the first operand is returned
//POI #7: Note that the second operand is false in every case but because of POI #6 returned value in every case is false

/***********************************************************************************************/
/************************* Comparison Between Same Values **************************************/
/***********************************************************************************************/

console.log();
console.log("/** Comparison Between Same Values **/");
console.log();

console.log("(null === null) => " + (null === null));
console.log("(undefined === undefined) => " + (undefined === undefined));
console.log("(sublime === sublime) => " + ("sublime" === "sublime"));

console.log("(undefined !== undefined) => " + (undefined !== undefined));
console.log("(null !== null) => " + (null !== null));

//This is the only value in JS that isn't equal to itself
console.log("(NaN === NaN) => " + (NaN === NaN) + " => Comment: This is the only value in JS that isn't equal to itself");
console.log("(Number.NaN === Number.NaN) => " + (Number.NaN === Number.NaN) + " => Comment: This is the only value in JS that isn't equal to itself");


/*********************************** FUNCTIONS *********************************************************/

function checkFallbackApproach(sentinelValue) {

    var anotherNamespace = anotherNamespace || {};
    anotherNamespace.falseValue = false;
    anotherNamespace.nullValue = null;
    anotherNamespace.undefinedValue = undefined;
    anotherNamespace.nanValue = NaN;
    anotherNamespace.emptyValue = '';
    anotherNamespace.zeroValue = 0;

    anotherNamespace.sentinelValue = sentinelValue;

    console.log();
    console.log("(" + anotherNamespace.falseValue + " || " + anotherNamespace.sentinelValue + ") => " + (anotherNamespace.falseValue || anotherNamespace.sentinelValue));
    console.log("(" + anotherNamespace.nullValue + " || " + anotherNamespace.sentinelValue + ") => " + (anotherNamespace.nullValue || anotherNamespace.sentinelValue));
    console.log("(" + anotherNamespace.undefinedValue + " || " + anotherNamespace.sentinelValue + ") => " + (anotherNamespace.undefinedValue || anotherNamespace.sentinelValue));
    console.log("(" + anotherNamespace.nanValue + " || " + anotherNamespace.sentinelValue + ") => " + (anotherNamespace.nanValue || anotherNamespace.sentinelValue));
    console.log("(" + anotherNamespace.emptyValue + " || " + anotherNamespace.sentinelValue + ") => " + (anotherNamespace.emptyValue || anotherNamespace.sentinelValue));
    console.log("(" + anotherNamespace.zeroValue + " || " + anotherNamespace.sentinelValue + ") => " + (anotherNamespace.zeroValue || anotherNamespace.sentinelValue));
}