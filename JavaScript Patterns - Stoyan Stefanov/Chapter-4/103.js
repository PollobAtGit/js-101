
var print = function (msg) {
    console.log(msg);
};

function hoistMe() {

    //POI: Because of function hoisting, foo is declared here
    //POI: 'foo' is declared using function declaration. So it's declaration & definition both are hoisted
    //POI: 'bar' is defined as un-named function expression. So the variable bar's declaration is hoisted here only
    //not function definition
    //POI: Hoisting behavior for function expression is similar to variable hoisting. The difference occurs when function
    //declaration is used

    print(typeof foo === 'function');//true

    //POI: typeof returns result in string format
    //POI: Function 'bar' declaration has been hoisted but not the function definition
    print(typeof bar === 'undefined');//true

    function foo() { }

    //POI: Here too function 'bar' declaration is hoisted but function definition is not hoisted. So type of the function
    //is not defined
    print(typeof bar === 'undefined');//true

    var bar = function () { }

    //POI: bar is defined in the above statement. So now the variable is defined
    print(typeof bar === 'function');//true
}

hoistMe();

// ------ [Function hoisting with function expression] impact when declaring a function definition dynamically -------

function declareFunctionConditionally(shouldDeclare) {

    print(typeof func === 'undefined');//true
    print(typeof anotherFunc === 'undefined');//true

    if (shouldDeclare) {
        //POI: For some reason function declaration is hoisted in block scope (WHY? Block scope doesn't work for JS)
        print(typeof func === 'function');//true
        function func() { }
    } else {
        //POI: This will have impact because function hoisting (when used with function expression) only hoists the variable
        //alias not the function definition. Still it's a messy approach
        var anotherFunc = function () { }
    }

    print(typeof anotherFunc === 'function');
    print(typeof func === 'function');
}

print('');

declareFunctionConditionally();

print('');

declareFunctionConditionally(true);