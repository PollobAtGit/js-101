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

// POI: Math.trunc return NaN , Infinity & -Infinity for respective inputs
cl(Math.trunc(Number.NaN));//NaN
cl(Math.trunc(Number.POSITIVE_INFINITY));//Infinity
cl(Math.trunc(Number.NEGATIVE_INFINITY));//-Infinity

const integralNum = Math.trunc("aNumber");

// POI: For NaN, NaN !== NaN
if (integralNum === integralNum) { cln(integralNum); }

cln(Math.ceil(Number.NaN));//NaN
cl(Math.ceil(Number.POSITIVE_INFINITY));//Infinity
cl(Math.ceil(Number.NEGATIVE_INFINITY));//-Infinity
cl(Math.ceil("some string"));//NaN
cl(Math.ceil({}));//NaN
cl(Math.ceil(true));//1
cl(Math.ceil(false));//0
cl(Math.ceil(null));//0
cl(Math.ceil(undefined));//NaN
cl(Math.ceil(() => { }));//NaN

const numberTrunc = (x) => {
    if (typeof x !== "number") { return; }
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

cln(numberTrunc(-0));//-0
cl(numberTrunc(0));//0
cl(numberTrunc(1.23));//1
cl(numberTrunc(-2.32));//-2
cl(numberTrunc(undefined));//undefined
cl(numberTrunc(null));//undefined
cl(numberTrunc(Number.NaN));//NaN
cl(numberTrunc(Number.POSITIVE_INFINITY));//Infinity
cl(numberTrunc(Number.NEGATIVE_INFINITY));//-Infinity
