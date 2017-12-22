var OneOThree;
(function (OneOThree) {
    // MI: null/undefined/never are subtypes of all types (!). So every type can contain null or undefined
    function warnUser(s) {
        console.log(s);
    }
    function warnUserStr(s) {
        console.log(s);
    }
    // POI: void is a valid Type
    // POI: void can be defined as a Type for a variable as well as a return Type of a function
    // POI: Variable of Type void can only take undefined & null. It even can't be declared without assignment
    // let name: void;
    // let stt : void = 10;
    var sf = undefined;
    var st = null;
    warnUser("TypeScript!");
    // POI: Following is allowed because return type of warnUser is void & a variable can be of Type void
    var warn = warnUser(null);
    var wrn = warnUserStr(undefined);
    // POI: void ultimately translates to undefined (at least in case of logging to console)
    console.log(warn);
    console.log(wrn);
    // POI: Not only undefined & null are valid values but also Types
    var u = undefined;
    var n = null;
    console.log(n);
    console.log(u);
    // POI: null/undefined are sub types of other Types. So null/undefined can be assigned to number/string etc.
    var nullNum = null;
    var undefinedNum = undefined;
    var nullStr = null;
    var undefinedStr = undefined;
    var Editor;
    (function (Editor) {
        Editor[Editor["VS"] = 10] = "VS";
        Editor[Editor["WebStorm"] = 20] = "WebStorm";
    })(Editor || (Editor = {}));
    ;
    // POI: null/undefined are subtypes of all Types including custom types
    var editor = null;
    var _editor = undefined;
    console.log(editor);
    console.log(_editor);
    // POI: Following function works as expected because TypeScript works based on block scoping
    function timeoutTenTimes() {
        var _loop_1 = function (i) {
            setTimeout(function () {
                console.log(i), 100 * i;
            });
        };
        // POI: Following creates a new scope. So i is not defined
        for (var i = 0; i < 10; i = i + 1) {
            _loop_1(i);
        }
    }
    function isVarDefined(isTrue) {
        // POI: Following is not valid because block scoping is applicable for TS
        // console.log(s);
        if (isTrue) {
            var s = '';
        }
    }
    timeoutTenTimes();
})(OneOThree || (OneOThree = {}));
