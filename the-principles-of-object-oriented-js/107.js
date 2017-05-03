/**
 * Created by pollo_000 on 5/3/2017.
 */

'use strict';

function print(msg) {
    console.log(msg);
}

//POI: Following trick to work on 'arguments' structure will only work if THAT function on which 'apply' is being used
//works depending on 'arguments' structure

var numbers = [ 1 , 2, 3, 4];

//POI: Math.max internally works on 'arguments' array like structure
var maxNumByDistinctValues = Math.max(1, 2, 3, 4);

//POI: Math.max internally works on 'arguments' array like structure that's why it can take an array as an argument
var maxValueByFromArrayByApply = Math.max.apply(null, numbers);

print(maxNumByDistinctValues);
print(maxValueByFromArrayByApply);

function min() {
    var argumentsLength = arguments.length;
    var currentIterationMinValue = Number.MAX_VALUE;
    while (argumentsLength--) {
        var currentValue = arguments[argumentsLength];
        if (currentValue < currentIterationMinValue) {
            currentIterationMinValue = currentValue;
        }
    }
    return currentIterationMinValue;
}

//POI: This function can take numerous arguments because the functionality depends on 'arguments' array like structure
print(min(1, 2, 3, 4));

//POI: This function can also take literally array but that has to be done via 'apply' method that resides in Function
//prototype. This will work only & only because the function's functionality depends on 'arguments' array like structure
print(min.apply(null, numbers));

//POI: This context change in this case has no impact because function 'min' doesn't depend on any context. So we could
//easily pass null or undefined or NaN or anything in fact
print(min.apply(this, numbers));
print(min.apply(undefined, numbers));
print(min.apply(NaN, numbers));
print(min.apply(0, numbers));
print(min.apply(1, numbers));
print(min.apply(true, numbers));
print(min.apply(false, numbers));
