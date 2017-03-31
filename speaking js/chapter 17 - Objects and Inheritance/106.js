
'use strict'

function print(msg) {
    console.log(msg);
}

var jane = {
    name: 'Jane',
    saysHelloTo: function(otherName) {

        'use strict';

        return this.name + ' says hello to ' + otherName;
    }
};

print(jane.saysHelloTo('tom'));

//POI: 'jane' at the beginning works as a way to access method. It has no significance in terms
// of what is being returned from function

//POI: 'call' resides in 'Function.prototype'. This function excepts an object as the first parameter.
// The other parameters are simple arguments to the specified function

print(jane.saysHelloTo.call(jane, 'Tarzan'));
print(jane.saysHelloTo.call({ name: 'Wolverine' }, 'X-Men'));

//POI: Given object doesn't have a property named 'name'. So 'this.name' will return undefined
print(jane.saysHelloTo.call({ }, 'Justice League'));

function saysHello(otherName) {

    //POI: using 'this' here will throw error in strict mode because this is a function not a method.
    // 'this' is undefined here

    return this.name + ' says hello to ' + otherName;
}

//POI: The function is being invoked directly without any specifier
//POI: Using 'call' to invoke the function
//POI: No object is being passed. So 'this' undefined
print(saysHello.call('Flash'));

//POI: Object is defined as the first parameter of 'call' which has property 'name'
print(saysHello.call({ name: 'Cyclops' }, 'Flash'));

//POI: an empty object is passed as the first argument where name isn't defined
print(saysHello.call({ }, 'Flash'));
print(saysHello.call(new Number(23), 'Flash'));

print((new Number(23) instanceof Number) === true);
print((Number(23) instanceof Number) === false);