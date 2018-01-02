
/**Array Element Finding */

const cln = (x) => { console.log(); console.log(x) };
const cl = (x) => console.log(x);

const cls = ["PostRepository", "IUnitOfWork", "IRepository", "BlogRepository"];

// POI: find returns the first element
cl(cls.find(x => x.startsWith("I")));//IUnitOfWork
cl(cls.filter(x => x.startsWith("I")));//['IUnitOfWork', 'IRepository']
cl(cls.findIndex(x => x.startsWith("I")));//1

/**Set Data structure */

const uniqueNames = new Set();

uniqueNames.add("Hello");
uniqueNames.add("ANY");

cln(uniqueNames);//Set { 'Hello', 'ANY' }
cl(uniqueNames.has("Hello"));//true
cl(uniqueNames.has("some"));
cl(uniqueNames.has(undefined));

uniqueNames.add(undefined);
uniqueNames.add(null);
uniqueNames.add(Number.NaN);
uniqueNames.add({ s: 10 });
uniqueNames.add(false);

cl(uniqueNames);

// POI: Properly detects undefined & null. Comparison is done properly
cl(uniqueNames.has(undefined));
cl(uniqueNames.has(null));

uniqueNames.forEach(x => cl(x));//Hello -> ANY

// POI: entries() & values() of set are not the same
// POI: entries() emits an array for each element & each array elements are same for a single entry
for (const e of uniqueNames.entries()) { cl(e); }

// POI: values() emit only the values
for (const e of uniqueNames.values()) { cl(e); }

cln(uniqueNames.size);

// POI: Absence of argument deleted value 'undefined'. Is it desired?
uniqueNames.delete();

cl(uniqueNames.size);
cl(uniqueNames);

// POI: Removes everything
uniqueNames.clear();
cln(uniqueNames.size === 0 ? "EMPTY" : "NOT EMPTY");

const aSet = new Set();

aSet.add("Hello");
aSet.add(10);

// POI: This doesn't delete anything
aSet.delete();

cln(aSet);

aSet.delete(10);
cl(aSet);

const anotherSet = new Set();

anotherSet.add(10);
anotherSet.add(100);
anotherSet.add("Pollob");

const itr = anotherSet.entries();

cln(itr.next());
cl(itr.next());
cl(itr.next());

// POI: All elements are extracted for the iterator so 'done' is true
// POI: For each element (iterator) returned by 'next' value contains [ value, value ]
cl(itr.next());
cl(itr.next());
