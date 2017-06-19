
var print = function (msg) {
    console.log(msg);
};

//POI: Every function is an Object
print(new Function() instanceof Object);//true
print(new Function() instanceof Function);//true
print(typeof new Function());//function

//POI: Generally created functions are also instance of Function or type of function
print(function () { } instanceof Function);//true
print(function () { } instanceof Object);//true
print(typeof function () { });//function

var aFunction = new Function('a, b', 'return a + b;');

//POI: The function has name 'anonymous' which actually means the function has no name
//TODO: Can a named function be created using 'Function' constructor?
print(aFunction.name);//anonymous

//POI: Following is also an anonymous function but this time the 'name' property is totally EMPTY
print((function () { }).name);
print(print.name);//print

//POI: The function has no name. So it's a anonymous function
print(aFunction);//[Function: anonymous]

//POI: The function (also an object) is being executed
print(aFunction(1, 2));//3

print(aFunction instanceof Function === true);//true
print((typeof aFunction === 'function') === true);//true

// POI: To detect if the argument is a valid function or not or a object property is not a function or not using typeof
//on that variable & checking with string 'function' is safe enough. Even though functionally using instanceof & checking
//with with Function constructor reference is enough

var loopInsideAntiPattern = function () {

    //POI: i & current both are defined at the very beginning of the function because of function hoisting
    print(i);//undefined
    print(current);//undefined

    for (var i = 0; i < 3; i = i + 1) {
        var current = i;
    }

    print(i);//3
    print(current);//2
};

var loopInsideBetterPattern = function () {

    //POI: Better pattern is to define the variables with the default value at the beginning of scope
    var i = 0, current = 0;

    print(i);//0
    print(current);//0

    for (i = 0; i < 3; i = i + 1) {
        current = i;
    }

    print(i);//3
    print(current);//2
};

print('');
loopInsideAntiPattern();

print('');
loopInsideBetterPattern();
