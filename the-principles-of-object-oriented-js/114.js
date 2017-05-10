
function print(msg) {
    console.log(msg);
}

//POI: Using modular pattern
function Person(name) {

    //POI: Using 'Object.defineProperty' to allow more control over object property
    //POI: Passing 'this' as the context. So property will be created against 'this' object
    Object.defineProperty(this, "name", {

        //POI: Using passed value as argument
        value: name,

        //POI: More control over property settings
        enumerable: true,
        configurable: true
    });

    //POI: JUST a private method
    function privateSayMyName() { return this.name; }

    //POI: Using old-aged approach to define an object's properties
    this.sayMyName = privateSayMyName;

    var self = this;

    //POI: Return 'this' instance. Not necessary
    return {
        //POI: Using the private method's reference
        sayMyName: function () {

            //POI: This 'name' refers to the 'Person' object's 'name' property
            return name;
        },
        sayMyNameFully: function () {
            //POI: 'this' will have wrong impact in this case because 'this' will refer to the object in
            //return statemet
            return "My Name Is " + self.name;
        }
    };
}

var person = new Person("JANE");

print(person);
print(person.sayMyName());
print(person.sayMyNameFully());