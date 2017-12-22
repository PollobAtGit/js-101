
namespace OneOThree {
    // MI: null/undefined/never are subtypes of all types (!). So every type can contain null or undefined

    function warnUser(s: string): void {
        console.log(s);
    }

    function warnUserStr(s: string) {
        console.log(s);
    }

    // POI: void is a valid Type
    // POI: void can be defined as a Type for a variable as well as a return Type of a function
    // POI: Variable of Type void can only take undefined & null. It even can't be declared without assignment
    // let name: void;
    // let stt : void = 10;
    let sf: void = undefined;
    let st: void = null;

    warnUser("TypeScript!");

    // POI: Following is allowed because return type of warnUser is void & a variable can be of Type void
    let warn = warnUser(null);
    let wrn = warnUserStr(undefined);

    // POI: void ultimately translates to undefined (at least in case of logging to console)
    console.log(warn);
    console.log(wrn);

    // POI: Not only undefined & null are valid values but also Types
    let u: undefined = undefined;
    let n: null = null;

    console.log(n);
    console.log(u);

    // POI: null/undefined are sub types of other Types. So null/undefined can be assigned to number/string etc.
    let nullNum: number = null;
    let undefinedNum: number = undefined;

    let nullStr: string = null;
    let undefinedStr: string = undefined;

    enum Editor {
        VS = 10,
        WebStorm = 20
    };

    // POI: null/undefined are subtypes of all Types including custom types
    var editor: Editor = null;
    var _editor: Editor = undefined;

    console.log(editor);
    console.log(_editor);

    // POI: Following function works as expected because TypeScript works based on block scoping
    function timeoutTenTimes() {

        // POI: Following creates a new scope. So i is not defined
        for (let i: number = 0; i < 10; i = i + 1) {
            setTimeout(function () {
                console.log(i), 100 * i;
            });
        }
    }

    function isVarDefined(isTrue: Boolean): void {

        // POI: Following is not valid because block scoping is applicable for TS
        // console.log(s);
        if (isTrue) {
            let s: string = '';
        }
    }

    timeoutTenTimes();
}