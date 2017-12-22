var OneOOne;
(function (OneOOne) {
    var anyType = "10";
    // POI: Type conversion is applicable only for variables of type 'any'
    var num = anyType;
    console.log(anyType);
    console.log(num);
    var numStr = "100";
    var anotherNum = Number(numStr); //JS way of conversion
    console.log(anotherNum);
    // POI: Converting
    console.log("2032");
    // POI: Using 'as' is not safe apparently
    console.log("SM"); //Output doesn't make any sense
    console.log({}); //Output doesn't make any sense
    // POI: Accessing a variable before declaration is valid in JS because variable hoisting is performed
    console.log(jsVar);
    var jsVar = 150;
    console.log(jsVar);
    // POI: Not valid because tsVar is a type script variable & it has to be declared before usage
    // console.log(tsVar);
    var tsVar = 10;
    // POI: Exception because invoke is not defined here
    // console.log(invoke());
    var invoke = function (s) {
        var k = [0];
        // POI: Not allowed because 'k' is already defined. Multiple declaration of a variable in the same scope is not allowed
        // let k : string = "";
        // POI: Not valid because s is defined as function argument
        // let s = 10;
        return num;
    };
    // let invokeAnother = function() {
    //     // POI: Not valid because s is not defined locally or globally
    //     return s;
    // }
    var conditonalInvoke = function (isTrue, x) {
        if (isTrue) {
            // POI: This x declaration will shadow the 'x' from function argument (in contrast to C# which doesn't allow to declare variable inside inner block with the same name)
            var x_1 = 50;
            return x_1;
        }
        return x + 10;
    };
    console.log(conditonalInvoke(true, 20)); //50
    console.log(conditonalInvoke(false, 20)); //30
    var theCityAlwaysSleeps = function (isTrue) {
        var invoke;
        if (isTrue) {
            invoke = function () {
                return 10 + 10;
            };
        }
        // POI: Obviously it's accessible here
        return invoke;
    };
    console.log(theCityAlwaysSleeps(true)());
    // TODO: Is it enough to use double equal in TS?
    console.log(theCityAlwaysSleeps(false) == undefined); //true
    var famousSetTimeout = function () {
        for (var i = 0; i < 5; i = i + 1) {
            (function (s) {
                setTimeout(function () {
                    console.log(s);
                }, 1000);
                // POI: Need to pass the variable to make a distinct variable in a different scope
            })(i);
        }
    };
    famousSetTimeout();
    var famousSetTimeoutTs = function () {
        var _loop_1 = function (i) {
            setTimeout(function () {
                console.log(i);
            }, 1000);
        };
        for (var i = 0; i < 5; i = i + 1) {
            _loop_1(i);
        }
    };
    famousSetTimeoutTs();
    var numLiveForCat = 10;
    // POI: If not specified the type of Kitty will be same as a interface having the property keys
    var kitty = {
        name: "Auro",
        numLives: numLiveForCat
    };
    console.log(kitty);
    // POI: const works properly for objects also
    // kitty = {
    //     s : ""
    // };
    // MI: const object in TS is almost like a readonly list in C#
    // POI: const doesn't allow an object to re-assigned but every individual
    // porperty can be modified. So individual properties are not immutable
    kitty.name = "MODIFIED";
    kitty.numLives = 20;
    // POI: New properties can be added too into a const object
    kitty["s"] = "Added property";
    var oneObj = {};
    // POI: Apparently TS doesn't allow properties to be added using dot syntax
    // But only bracket syntax
    oneObj["s"] = "Added property";
    console.log(kitty);
    console.log(oneObj);
    var numArray = [10, 596, 89];
    // POI: Using tuple for Array de-structuring
    var numOne = numArray[0], numTwo = numArray[1], numThree = numArray[2];
    console.log(numOne + " : " + numTwo + " : " + numThree);
    // POI: dNum will hold the first element in the array
    var dNum = numArray[0];
    console.log(dNum); //10
    var anDNum = numArray[1];
    console.log(anDNum); //596
    // POI: Using spread operator to capture all the other nums
    // POI: Works in head & tail fashion
    var first = numArray[0], last = numArray.slice(1);
    console.log(first + " :: " + last); // 10 :: 596,889
    // POI: Getting the last element
    var lNum = numArray[2];
    console.log(lNum);
    // POI: Tuple as function argument allows developer to pass array as well
    // as a tuple
    var addDeconstructedArrayElement = function (_a) {
        var first = _a[0], last = _a[1];
        return first + last;
    };
    console.log(addDeconstructedArrayElement([10, 20, 30])); //30
    console.log(addDeconstructedArrayElement([40, 50])); //90
    // POI: Risky! Better to specify types in the tuple
    // console.log(addDeconstructedArrayElement(["", {}]));
    // POI: The gap indicates we are not interested in the middle element
    var addFirstAndLastArrayElements = function (_a) {
        var first = _a[0], last = _a[2];
        return first + last;
    };
    console.log(addFirstAndLastArrayElements([0, 2, 3])); //3
    // POI: '...' here will get rest of the array elements
    // TODO: Why ': [number, number[]]' doesn't work as Type definition?
    var addArrayElements = function (_a) {
        var first = _a[0], last = _a.slice(1);
        // POI: Using Arrow function
        return first + last.reduce(function (sum, curr) { return sum + curr; }, 0);
    };
    console.log(addArrayElements([10, 5, 6, 89])); //110
    // TODO: const on Array
})(OneOOne || (OneOOne = {}));
