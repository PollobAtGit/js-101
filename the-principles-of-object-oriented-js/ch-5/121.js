
const cl = (x) => console.log(x);

const book = {
	title: "The Principles Of Object-Oriented JavaScript"
};


// POI: Book has no explicit prototype set. So it's prototype is the prototype of Object which is ' {} '
var prototype = Object.getPrototypeOf(book);

cl(prototype);// {}
cl(prototype === Object.prototype);// true

// POI: book is a generic object defined using object literal notation still it has 
// constructor defined
cl(book.constructor);// [Function Object]

cl(book.isPrototypeOf({}));// false

// POI: {} is prototype of everything if prototype is not specified explicitly but there's a 
// difference between {} & Object.prototype (which itself refers to an empty object, {})
cl({}.isPrototypeOf(book));// false
cl(Object.prototype.isPrototypeOf(book));// true

const aBook = { 
	title: "The Principles Of Object-Oriented JavaScript",
	
	// POI: Arrow function doesn't work for generic objects when refering to 'this'
	// String: () => this.title;
	toString: function() { 
		return this.title; 
	}
};

cl(aBook);

cl(book === aBook);
cl(book.valueOf());
cl(aBook.valueOf());

const now = new Date();
const outDated = new Date(2010, 1, 1);

cl(now > outDated);// true

cl(now.toString());// Fri Jan 26 2018 21:10:59 GMT+0600 (Bangladesh Standard Time)
cl(outDated.toString());// Mon Feb 01 2010 00:00:00 GMT+0600 (Bangladesh Standard Time)

const bookMessage = `Book: ${book}`;
cl(bookMessage);// Book: [object Object]

cl(`A Book: ${aBook}`);// A Book: The Prin .....


// IMPORTANT: In JS everything has constructor property
// Invoking a property on a primitive type
cl(1..constructor);// [Function Number]

