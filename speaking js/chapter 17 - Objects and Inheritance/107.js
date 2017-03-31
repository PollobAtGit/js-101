'use strict'

function print(msg) {
    console.log(msg);
}

var jane = {
    name: 'Jane',
    saysHelloTo: function(otherName) {
        return this.name + ' says hello to ' + otherName;
    }
};

print(jane.saysHelloTo.apply(jane, ['Tarzan']));

//POI: Invocation is similar to using 'call' function where first parameter is the object that provides
//context for the method. Second parameter is used to get an array that maps to the argument of the function
print(jane.saysHelloTo.apply({ name: 'CONAN' }, ['Tarzan']));

//POI: Second element in array has no impact because the function doesn't take multiple arguments
print(jane.saysHelloTo.apply({ name: 'CONAN' }, ['Tarzan', 'Pokimon']));

function printGiven(msg) {
    console.log(msg);
}

printGiven("something");

//POI: 'apply' & 'call' both has to be provided with context otherwise the invocation is undefined 
printGiven.apply(['something']);//undefined
printGiven.call('something');//undefined

printGiven.apply({}, ['something']);//something