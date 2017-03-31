
'use strict';

function print(msg) {
    console.log(msg);
}

//POI: 'this' is implicit to every function and method
function globalThis() {

    //POI: 'this' is defined for both method & function in 'sloppy' mode
    //POI: 'this' will return the global object when used in a function
    //POI: 'this' for a function has no real meaning. So in 'strict' mode 'this' is not defined in a function
    return this;
}

var obj = {
    toThis: function() {
        return this;
    }
};

//Global object if defined in 'sloppy' mode
print(globalThis());
print(obj.toThis());

//POI: 'undefined' if used in 'strict' mode
print((globalThis() === undefined) === true);

print(obj);

//POI: 'this' returns the object & 'this' is implicit to that method
print(obj.toThis() === obj);