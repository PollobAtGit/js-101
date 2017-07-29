
// MI: const is ES6 is 1) blocked scoped & 2) constant that is it's value
// can't be changed

// MI: Generic object function has been simplified. We simply need to define the
// function nothing else. No need to mention keyword 'function' & use ':'

(function () {

    // POI: const is similar to 'let' in that it's also block scoped
    // console.log(isConst);

    if (true) {
        const isConst = true;
        console.log(isConst);

        // POI: isConst is a constant variable. It's value can't be changed. Either
        // Exception will be thrown or it will fail silently
        // isConst = false;

        console.log(isConst);
    }
})();

// POI: Using single quotation to make sure we can put double quotation
// inside string without escaping
console.log('SOM"E');

// POI: Following are usual string
let firstName = "Sheikh";
let middleName = "Ashiqul";
let lastName = "Islam";

// POI: String template. Using '$' before every interpolation & using back tick
let fullName = `${firstName} ${middleName} ${lastName}`;

console.log(fullName);

let person = {
    firstName: "Sheikh",
    lastName: "Ashiqul",
    lastName: "Islam",

    // POI: we don't need the syntax 'functionName: function() { .....'
    sayMyName() {
        return `${firstName} ${middleName} ${lastName}`;
    }
};

console.log(person.sayMyName());
