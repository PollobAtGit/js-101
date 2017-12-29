
const cl = (x) => console.log(x);

const buffer = new ArrayBuffer(10);

cl(buffer.byteLength);

// POI: Only porperty is byteLength. Other one is slice but that's in prototype (I guess)
cl(buffer);

buffer[0] = 100;
buffer[1] = "Str";
buffer[2] = true;
buffer[3] = null;
buffer[4] = undefined;
buffer[6] = {};

// POI: Overwriting previous value in the same index
buffer[6] = { id: 1000 };

cl(buffer);

// KFU! Why is valid?
buffer[20] = { isInvalidObj: true };

// POI: Apparently, ArrayBuffer keeps the data in a map! & no checking on index & stuff
cl(buffer);

/**Property assignment from multiple objects into a destination object (MIXIN) */
/**Note that it has nothing to do with inheritance because the prototype is not being changed */
/**Object.assign works only on enumerable properties */

const srcOne = { species: "Mammal" };
const srcTwo = { isAlive: true, nestedObj: { year: 2010 } };

// POI: Provide an object (empty or otherwise) on which the 'assign' will perform the operations
let destObj = {};
Object.assign(destObj, srcOne, srcTwo);

// POI: Object.assign will no mutate the destination variable if it's an variable of primitive type
// POI: Object's & array's are fine. Array's in JS are essentially objects
let anotherDest = [20];
Object.assign(anotherDest, destObj);

let destArr = [99];
Object.assign(destArr, destObj);

cl(destObj);
cl(anotherDest);//20
cl(typeof anotherDest.species === "undefined");//true

cl(destArr);// Includes 99 & the other object properties

/**Object.assign implementation */

function extend(...srcArr) {

    const dest = {};                        // POI: Properties need to be attached to a destination object

    srcArr
        .forEach((x) =>
            Object.keys(x)                  // POI: Object.keys retuns each enumerable properties of that object
                .forEach((y) =>
                    dest[y] = x[y]));       // POI: Desclaring properties for a const object is valid (no assignment though)

    return dest;
}

// POI: JS performs referencial comparison for equal sign
cl(extend(srcOne, srcTwo) === destObj);//false
