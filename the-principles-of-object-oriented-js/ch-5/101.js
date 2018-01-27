
const cl = (x) => console.log(x);

cl(Object.prototype);

// POI: This added property is a enumerable property
Object.prototype.add = function (v) {
	// POI: this will return [object Object] for the object 
	// but will return string value for a string type
	// number for number type
	return this + v;
};

// POI: Object.prototype is a empty object that now contains a function
cl(Object.prototype);// { add: [Function] }

const book = {
	title: "The Principles Of Object Oriented JS",
};

cl(book.add(10));

// POI: Valid operation because Object.prototype now contains add method
cl("Title".add(" [string]"));// Title [string]
cl(5..add(" [number]"));// 5 [number]
cl(true.add(" [boolean]"));// true [boolean]
cl((function() { }).add(" [function]"));// function () { } [function]

// POI: toString() on function returns the function definition
cl(function(x) { return x; }.toString());// function (x) { return x; }

const iAmEmpty = {
	iAmNotEmpty: 0,
};

// POI: add will show up during iteration because any porperty added to Object.prototype is an enumerable property also
for(const i in iAmEmpty) {
	cl(i);// add, iAmNotEmpty
}

// POI: This filtering ensures only own properties will be emitted
for(const i in iAmEmpty) {
	if(iAmEmpty.hasOwnProperty(i)) {
		cl(i);
	}
}

cl("\nObject Creation\n");

const aBook = Object.create(iAmEmpty);

// POI: iAmEmpty has prototype set to Object.prototype
// POI: Object.prototype has add method
// POI: iAmEmpty has iAmNotEmpty property
// POI: aBook will have both of those properties
for(const i in aBook) {
	cl(i);// iAmNotEmpty | add
}

// POI: Below is the same as declaring a JS object having a property 'price' 
// whose base class is 'iAmEmpty'
const anotherBook = Object.create(iAmEmpty, {
	price: {
		configurable: true,
		enumerable: true,
		value: 10.23,
		writable: true,
	}
});

cl(anotherBook);// price: 10.23

for(const i in anotherBook) {

	// add | iAmNotEmpty | price
	if(typeof i === 'function') {
		cl(`${i} => ${anotherBook[i]()}`);
	} else {
		cl(`${i} => ${anotherBook[i]}`);
	}
	
}

// POI: Object.prototype is the prototype of aPerson
const aPerson = {
	name: "XYZ",

	// POI: ES6 arrow function can't be used here
	sayName: function() {
		return this.name;
	}
};

// POI: anotherPerson inherits from Object.prototype via aPerson
const anotherPerson = Object.create(aPerson, {
	age: {
		value: 10,
		writable: true,
		configurable: true,
		enumerable: true,
	},

	// POI: This name essentially overwrites inherited 'name' property
	name: {
		value: "ABC",
		writable: true,
		configurable: true,
		enumerable: true,
	}
});

cl(anotherPerson.sayName());// XYZ, ABC

cl(anotherPerson.hasOwnProperty("name"));// true
cl(anotherPerson.hasOwnProperty("sayName"));// false


