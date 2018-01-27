
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


