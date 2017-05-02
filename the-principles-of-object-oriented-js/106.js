
function debug(msg) {
    console.log(msg);
}

//POI: If used in 'strict' mode, following code will throw exception because 'this' is defined without
//context here & strict mode prevent that
function sayName() { return this.name; }

debug(sayName());//undefined

var name = "Some Name";

//POI: In browser, this function call will return text 'Some Name' because there GLOBAL VARIABLE 'name'
//will become a property of GLOBAL object 'Window'
debug(sayName());//undefined

var john = {

    //POI: Using the previously defined function
    sayMyName: sayName,

    //POI: The function uses 'this.name'. So THIS defined 'name' will be used because of the context
    name: "JOHN"
};

var alice = {
    name: "ALICE",
    sayMyName: sayName
};

debug(john.sayMyName());//JOHN
debug(alice.sayMyName());//ALICE

//POI: Changing context by using 'call'
debug(john.sayMyName.call({ name: "PAULO" }));//PAULO
