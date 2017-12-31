/**Number comparison */

const cln = (x) => { console.log(); console.log(x); }
const cl = (x) => console.log(x);

const aNumber = 0.2;
const anotherNumber = 0.1;

cl(aNumber + anotherNumber === 0.3);//false

// POI: To compare a & b do: (Math.abs(a) - b) < Number.EPSILON
cl(Math.abs(aNumber + anotherNumber) - 0.3 < Number.EPSILON);//true

/**Extract integer part from a floating number */

cln(Math.trunc(0.23));//0
cl(Math.trunc(1.56));//1
cl(Math.trunc(0.0));//0

// POI: Weird!
cl(Math.trunc(-0));//-0

// POI: !
cl(Math.trunc(null));//0

cl(Math.trunc(undefined));//NaN
cl(Math.trunc("number"));//NaN
cl(Math.trunc({}));//NaN

const integralNum = Math.trunc("aNumber");

// POI: For NaN, NaN !== NaN
if (integralNum === integralNum) { cln(integralNum); }
