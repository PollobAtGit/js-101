
/**Map */

const cl = (x) => console.log(x);
const cln = (x) => { console.log(); console.log(x); }

const aMap = new Map();

aMap.set("Element #1", 10);
aMap.set("Element #2", 30);

// POI: Map doesn't throw exception when a new entry with same key arises rather it overwrites the value for the key
aMap.set("Element #1", 50);

cl(aMap);//Map { 'Element #1' => 50, 'Element #2' => 30 }

cl(aMap.has("Ele"));// false
cl(aMap.has("Element #1"));// true

cl(aMap.get("Element #1"));// 50

// POI: If value for a key doesn't exist then undefined is returned
cl(aMap.get("Ele"));// undefined
cln(aMap.size);

// POI: values() return values & it works same as Set() & returned values are wrapped as
// MapIterator (should not be same for Set())
cl(aMap.values());

// POI: Returns MapIterator that wraps rows/elements each of which are array & each array contains two elements only
// first one being the key & the second one being the value
cl(aMap.entries());

// POI: entries() returns a IterableIterator<[K, V]> which contains methods next() & return methods
cl(aMap.entries().next());// { value: [ 'Element #1', 50 ], done: false }
cl(aMap.entries().next());// { value: [ 'Element #1', 50 ], done: false }

const itr = aMap.entries();

// POI: Note the done === true & value === undefined when iteration is done
cln(itr.next());// { value: [ 'Element #1', 50 ], done: false }
cl(itr.next());// { value: [ 'Element #2', 30 ], done: false }
cl(itr.next());// { value: undefined, done: true }
cl(itr.next());// { value: undefined, done: true }

// POI: Key value pair in JS is essentially an array
for (const [key, value] of aMap) {
    cl(`${key} => ${value}`);
}

// TODO: Test with return() method of IterableIterator<[K, V]>

/**Old way of using generic object as Map */

const oldMap = {};

oldMap["Element #1"] = 10;
oldMap["Element #2"] = 30;
oldMap["Element #1"] = 50;

// POI: Getter
cln(oldMap["Element #1"]);
cl(oldMap["Element #2"]);

// POI: Length of map
// POI: keys return own & enumerable properties
cln(Object.keys(oldMap).length);

// POI: [for ... of] is not valid for a geneic JS object
// for (const el of oldMap) { cl(el); }

// POI: To iterate through the generic object keys we need to use [for ... in] construct which returns all enumerable
// properties in the prototype chain
for (const el in oldMap) {

    // POI: Each object has 'hasOwnProperty' property method
    if (oldMap.hasOwnProperty(el)) {
        cl(`${el} => ${oldMap[el]}`);
    }
}

// POI: Object.keys return own & enumerable properties of a generic object
for (const el of Object.keys(oldMap)) {
    cl(`${el} ==> ${oldMap[el]}`);
}

// POI: Yey! Array is an object so it has 'hasOwnProperty' method
cln([].hasOwnProperty("length"));
