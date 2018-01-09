/**Destructuring Array & Object while passing to function */

const cln = (x) => { console.log(); console.log(x); }
const cl = (x) => console.log(x);

// POI: Not receiving array, array as rest argument or as separate arguments
// POI: Getting a destructured array
function dXY([x, , , , y, z]) { cl(`${x} | ${y} | ${z}`); }

function oldDXY(arr) {

    const x = arr[0];
    const y = arr[4];
    const z = arr[5];

    cl(`${x} || ${y} || ${z}`);
}

// POI: Receiving a destructured object
function xNM({ name, age }) { cl(`${name} | ${age}`); }

function oldxNM(obj) {
    const name = obj.name;
    const age = obj.age;

    cl(`${name} || ${age}`);
}

// POI: Receiving destructured object properties with renamed variables
// POI: Also destructuring nested property
function xNMRename({ name: n, age: a, other: { h: iBool } }) { cl(`${n} | ${a} | ${iBool}`); }

// POI: Renaming & default property value in object de structuring
const { j = true, k: kk } = { k: "KOP", };

// POI: Default object property value in object destructuring as function argument
function xdNMRename({ d = 1, name: n, age: a, other: { h: iBool } }) { cl(`${d} | ${n} | ${a} | ${iBool}`); }

function oldxNMRename(obj) {

    // POI: Just renaming the properties
    const n = obj.name;
    const a = obj.age;

    // POI: Nested destructuring
    const iBool = obj.other.h;

    cl(`${n} || ${a} || ${iBool}`);
}

dXY([10, "x", "z", undefined, { name: 56 }, [89.02]]);//10 | [object Object] | 89.02

// POI: Trailing commas are valid because that will create some array elements which has value undefined
dXY([10, "x", "z", undefined, { name: 56 }, [89.02], , ,]);

xNM({ species: "dog", name: "someOne", other: {}, age: 56, sayName: function () { } });// someOne | 56
oldxNM({ species: "dog", name: "someOne", other: {}, age: 56, sayName: function () { } });// someOne || 56

xNMRename({ species: "dog", name: "someOne", other: { h: true }, age: 56, sayName: function () { } });// someOne | 56 | true
oldxNMRename({ species: "dog", name: "someOne", other: { h: true }, age: 56, sayName: function () { } });// someOne | 56 | true

xdNMRename({ species: "dog", name: "someOne", other: { h: true }, age: 56, sayName: function () { } });// 1 | someOne | 56 | true

oldDXY([10, "x", "z", undefined, { name: 56 }, [89.02], , ,]);// 10 || [object Object] || 89.02

// POI: Default value forde structured array
const [xx, , , yy = 18, zz] = [0.11];

cl(`${xx} => ${yy} => ${zz}`);// 0.11 => 18 => undefined
