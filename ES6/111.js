
const cln = (x) => { console.log(); console.log(x); }
const cl = (x) => console.log(x);

const aObj = {};
const anArray = [10, 20, "Thirty", { name: "Key" }, aObj];

// POI: using an array as argument because Map works on [key, value] mapping Map constructor will take the first element as [key] for the
// entry and second element as the [value] for the entry
const anArrayForMap = [["a", 1], [2, "THREE"], [{ name: "Key" }, undefined], anArray];

// POI: Create Set from an array
const aSet = new Set(anArray);

// POI: Create a map from an array
const aMap = new Map(anArrayForMap);

cl(aSet);
cl(aMap);// Map { 'a' => 1, 2 => 'THREE', { name: 'key'} => undefined }

aSet.delete(20);

// POI: Will have no impact because equality checking will be done based on reference
aSet.delete({ name: "Key" });

// POI: This statement will remove the object because aObj will checked for referencial equality
aSet.delete(aObj);

cl(aSet);// Set { 10, 'Thirty' }

// aMap.delete(anArray);

// POI: Registered as '[ 56, 'TY' ] => undefined'. So first element in Set for Map data structure is key & the other one is value
// POI: Implicitly maps undefined for the key
aMap.set([56, "TY"]);
aMap.set({}, 56);

// POI: This statement is valid because aObj is seperate from '{}' (referencially)
aMap.set(aObj, 60);

// POI: Nothing to delete essentially because deletion object is seperate from the entered object
aMap.delete({});

cl(aMap);

// POI: Will delete the key & associated value properly
aMap.delete(aObj);
cl(aMap);

/**Promise */

cln("");

function getPromise() {

    return new Promise(function (resolve, reject) {

        setTimeout(() => resolve()
            , 10000);

    });
}

getPromise()
    // POI: This call back will be invoked pretty later
    .then(() => { cl(i); for (var i = 0; i < 10; i = i + 1) { cl(`From THEN => ${i}`); } });

// POI: This statement will be executed before call back in then() of the Promise is executed
cl("Promise Executing");

for (var i = 50; i < 53; i = i + 1) {
    // setTimeout(() => console.log(i), 2000);
    (function (num) {
        setTimeout(() => console.log(num), 4000);
    })(i);
}

// ! Why this works? 'j' is/should be 105 when the functions are executed after 5 second
for (let j = 100; j < 105; j = j + 1) {
    setTimeout(() => console.log(j), 5000);
}

