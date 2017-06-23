
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
        //POI: Function declaration hoisting in block scope is a implementation specific behavior. But based on standard,
        //function 'func' will be hoisted in function scope
        //Better practice: Not to use conditional function delcaration. In strict mode this is not valid
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

var returnFunc = function (isTrue) {

    print(typeof trueFunc === 'undefined');
    print(typeof falseFunc === 'undefined');

    if (isTrue) {

        //POI: Named function 'func' is not hoisted because alias 'trueFunc' is hoisted
        print(typeof func === 'function');//false

        //POI: Function expression is used. So the variable/alias will be hoisted
        //BP: Directly returning an un-named function expression. As there's no alias/variable there's nothing to be hoisted
        var trueFunc = function func() { return 10; };

        print(trueFunc.name);//func

        return trueFunc;
    }

    //POI: Named function 'anotherFunc' is not hoisted because alias 'falseFunc' is hoisted
    print(typeof anotherFunc === 'function');//false

    //POI: Function expression is used. So the variable/alias will be hoisted
    //BP: Directly returing an un-named function
    var falseFunc = function anotherFunc() { return 20; };

    print(falseFunc.name);//anotherFunc

    return falseFunc;
}

print('');
print(returnFunc()());//20

print('');
print(returnFunc(true)());//10
