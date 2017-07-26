
// TODO: Explore the JS construction of 'Color'
enum Color {
    RED = 10,
    GREEN = 11,
    YELLOW = 20,
    BLUE = 10
}

let blue: Color = Color.BLUE;
let green: Color = Color.GREEN;

// POI: There should be a better approach from TS
function printColorName(color: Color) {
    switch (color) {
        case Color.BLUE: return "BLUE";
        case Color.RED: return "RED";
        case Color.GREEN: return "GREEN";
        default: return "NO KNOWN";
    }
}

// POI: Prints only index number of the selected Enum
console.log(blue);

console.log(printColorName(blue));
console.log(printColorName(green));

// POI: No value is defined for index '0' so returned value is undefined
console.log(Color[0]);//undefined

// POI: So called index is the assigned value to the Enum values. It's not literally index
// POI: Returned value is the name of the selected Enum value
let greenStr: string = Color[11];

console.log(greenStr);//GREEN

// POI: TSC detects the TYPE of the variable. In this case from assigned value TSC detects the type to be string
let str = "STR";

// POI: An variable that is assigned undefined can take any typed value. It's type is 'Any'
let s = undefined;

// POI: This is similar to above
let any: any;

// POI: All of the below is allowed because 's' is of type Any
// POI: Internally Type of 's' is being changed to number
s = 10;
console.log(s);

// POI: Internally Type of 's' is being changed to string
s = "";
console.log(s);

// POI: Internally Type of 's' is being changed to Boolean
s = true;
console.log(s);

// POI: Any is literally similar to dynamic type in some languages
// POI: It is allowed to invoke an non-existent method/property over an variable that is of Any type.
// Compiler doesn't check assuming that the property will be available in runtime

// POI:

// POI: Following is not allowed because at the end type of 's' becomes Boolean
// s.doSomething();

// POI: Following is not allowed because greenStr is of string type & doSomething doesn't exist
// greenStr.doSomething();

// POI: Following is allowed (from compiler's perspective though runtime error will occur) because 'any' is
// defined as Any & it has never been assigned to. So the type is at this point Any (dynamic)
// any.doSomething();

// TODO: What's the difference between object & Object?
// POI: Object is a valid TYPE. So TSC will check for errors during compilation
let obj: Object = 4;

// POI: Following is not allowed because 'Object' is a TYPE not of 'Any' Type. So TSC will check for functions
// existence
// obj.doSomething();
