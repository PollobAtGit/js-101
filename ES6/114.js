
const cln = (x) => { console.log(); console.log(x); }
const cl = (x) => console.log(x);

const k = 0.23;
const t = { n: "s" };

// POI: Object Initializer where k & t both are already defined
const obj = { pk: k, pt: t };

cl(obj);// { pk: 0.23, pt: { n: 's' } }

// POI: Shorthand of JS object initialization
cl({ t, k });// { t: { n: 's' }, k: 0.23 }

// POI: Computed property name
const oneObj = { [`h${k}`]: 56 };
cl(oneObj);// { 'h0.23': 56 }
cl({ ['pro' + 'perty']: true });// { property: true }

// POI: Two properties are being created 1# t 2# k
// POI: t has the value of variable t & k has the value of variable k
const copyOfObj = { t, k };

// POI: New property t is being created. So to access n from the new object
// we need to access t first
cl(copyOfObj.t.n === { t }.t.n);// true

/**Computed Property Name in object initializer*/

// POI: Assignment to constant variable is not allowed
let i = 0;

// POI: Associativity left to right
// POI: First increment value then put value of the object property
// POI: Computer property name was available only by using bracket notation but now it's available
// with object notation
const a = {
    ['_' + (++i)]: i,
    ['_' + (++i)]: i,
    ['_' + (++i)]: i
};

cln(a);// { _1: 1, _2: 2, _3: 3 }

const arr = [10, 56, 89];
const spreaded = (x, y, z) => cl(`${x} => ${y} => ${z}`);

// POI: Flattens the array elements
// POI: Spreading is just the opposite of resting
spreaded(...arr);// 10 => 56 => 89

// POI: Following is not allowed in nodeJs yet but in this case
// all properties of obj will be assigned to easyToCopy
// const easyToCopy = { ...obj };

const inc = () => ++i;

// POI: Using calculated property name for object literal notation
const anotherObj = {
    ['_' + inc()]: 'randomValue',
    ['_' + inc()]: 'randomValue_1',
    ['_' + inc()]: 'randomValue_2'
};

cl(anotherObj);// { _4: 'randomValue', _5: 'randomValue_1', _6: 'randomValue_2' }

// POI: Using object initializer
// POI: Shorter method syntax. Not using keyword 'function'
const objWithProperty = {
    k,
    getK() {
        return this.k;
    },
    calculatePowOf(x) {
        return Math.pow(this.k, x);
    }
};

cl(objWithProperty);// { k: 0.23, getK: [Function: getK] }
cl(objWithProperty.getK());// 0.23
cl(objWithProperty.calculatePowOf(3));// 0.012167
