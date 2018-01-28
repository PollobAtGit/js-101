const cl = (x) => console.log(x);
const isPropertyExists = (v, prop) => prop in v;

cl((Object.prototype).isPrototypeOf({}));// true
cl({}.isPrototypeOf({}));// false

// POI: To have access to prototype of any existing object use __proto__ getter
cl({}.__proto__);// {}
cl({}.__proto__ === Object.prototype);// true

// POI: Using __proto__ getter is not recommended 
// POI: Use Object.getPrototypeOf(...) method
cl(Object.getPrototypeOf({}));// {}
cl(Object.getPrototypeOf({}) === Object.prototype);// true

// POI: No prototype for this object is being set
const nakedObj = Object.create(null);

// POI: Prototype is null/undefined
cl(Object.getPrototypeOf(nakedObj));// null
cl(nakedObj.__proto__);// undefined

const nullProto = Object.create(null, {
	prop: {
		writable: false,
		configurable: false,
		enumerable: false,
		value: 10.23
	}
});

cl("\n...... IN OPERATOR .......\n");

// POI: in operator doesn't depends on enumerable property
cl("prop" in nullProto);
cl(nullProto.prop);

// POI: for...in depends on enumerable property
for(const p in nullProto) {
	cl(p);// EMPTY
}

const aObj = Object.create({ name: "x" }, {
	age: {
		writable: false,
		configurable: false,

		// POI: value of enumerable property has no impact on in operator
		// POI: value of enumerable property has impact on for...in op
		enumerable: false,
		value: 20,
	},
	lan: {
		writable: false,
		configurable: false,

		// POI: Property will show up in for..in operation & in 'in' op
		enumerable: true,
		value: "EN",
	}
});

cl(isPropertyExists(aObj, "name"));// true
cl(isPropertyExists(aObj, "age"));// true
cl(isPropertyExists(aObj, "lan"));// true

// lan => EN => hasOwnProperty: true 
// name => x => hasOwnProperty: false
for(const i in aObj) {
	cl(i + " => " + aObj[i] + " => hasOwnProperty: " + aObj.hasOwnProperty(i));
}

