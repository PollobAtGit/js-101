/**
 * Created by pollo_000 on 5/3/2017.
 */

function print(msg) {
    console.log(msg);
}

function myName() {
    return this.name;
}

var person = {
    name: "JOHN",
    sayMyName: myName
};

print(person.sayMyName());

//POI: undefined because 'this' has no property named 'name'
print(person.sayMyName.call(this));

//POI: Changing context by using 'call'
print(person.sayMyName.call({ name: "SIA"}));//SIA

//POI: Following will not invoke 'sayMyName' method immediately rather it will return a function pointer to that method
//with the changed context
var sayMyNameFunc = person.sayMyName.bind({ name: "TISHA"});

//POI: Invoking the function here
print(sayMyNameFunc());//SIA

function myFullName(lastName) {
    return this.firstName + " " + lastName;
}

var personWithFullName = {
    firstName: "JOHN",
    sayMyFullName: myFullName
};

print(personWithFullName.sayMyFullName("HUSSY"));

//POI: Changed context using another JS object also passing required argument to the method
print(personWithFullName.sayMyFullName.call({ firstName: "STUART" }, "HUSSY"));

//POI: Using apply method
print(personWithFullName.sayMyFullName.apply({ firstName: "STUART" }, [ "HUSSY" ]));

//POI: Getting a reference to the function that has changed context
var personWithFullNameArgumentsGiven = personWithFullName.sayMyFullName.bind({ firstName: "SHOWN" }, "MERCHANT");

//POI: Function is not invoked with any argument because argument is bound with function parameter above
print(personWithFullNameArgumentsGiven());

//POI: Argument to the function is not provided
var personWithFullNameNoArgumentsGiven = personWithFullName.sayMyFullName.bind({ firstName: "SHOWN" });

//POI: Argument is provided later when it is really invoked.
print(personWithFullNameNoArgumentsGiven("DAVID"));

//POI: Problematic scenario. Given array is valid to be send from syntax's point of view but the function doesn't rely
//on 'arguments' structure. So proper full name will not be returned
var personWithFullNameFuncWithArray = personWithFullName.sayMyFullName.bind({ firstName: "SHOWN" }, [ "MIG", "MERCHANT" ]);
print(personWithFullNameFuncWithArray());

function toStringOnArray(msg) {

    //POI: Because "" is mentioned given array's toString() will be invoked
    //POI: Array's toString() will join each element with ','
    return msg + "";
}

print(toStringOnArray([ "123", "5654"]));