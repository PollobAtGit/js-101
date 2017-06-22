
var print = function (msg) {
    console.log(msg);
};

var add = function (a, b) {
    return a + b;
};

//POI: Named function expression keeps the original named function name
var add_1 = function sum(a, b) {
    return a + b;
};

//POI: Aliasing the function though 'name' property of the alias will still return the original name used as named function
var refAdd = add_1;

print(refAdd(3, 5));

print(add.name);//add

//POI: Named function expression keeps the original name for the named function as 'name' property for any function
//POI: If the original function expression is not a named function expression than the alias name is used for 'name'
//property
print(add_1.name);//sum
print(refAdd.name);//sum

//POI: No semi-colon is put at the end of the functon declaration because it's not a function expression
function addition(a, b) {
    return a + b;
}

print(addition.name);//addition

//POI: Ultimately, 'func' is assigned to the given call back as function expression
//POI: Parameter is a function alias
var callBack = function (func) {

    //POI: func is a function expression. As it holds a function it has 'name' property
    //POI: Unnamed/anonymous functions has no name. So 'name' property is EMPTY for them
    //POI: Named functions has 'name' property populated with the original name used when declaring named function

    return "From " + func.name + " : " + (func() + 10);
};

//POI: The passed function is an un-named/anonymous function expression
//POI: Even though alias name is used as 'name' property for un-named function expression, it's not applicable for passing
//function as argument (!) (Why?)
print(callBack(function () { return 10; }));//From  : 20

//POI: Passing as argument a named function (unusual practice) & that's allowed
//POI: Returned string contains the name used when declaring the function not the alias of the function
print(callBack(function namedFunction() { return 30; }));//From namedFunction : 40

var obj = {
    name: "NAME"

    //POI: Unnamed function expression
    //POI: Alias is present. So 'name' will be set to the alias
    , sayName: function () {
        return name;
    }
};

print(obj);
print(obj.sayName.name);//sayName