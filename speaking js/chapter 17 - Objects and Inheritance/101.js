'using strict'

function print(msg) {
    console.log(msg);
}

var jane = {
    name: "Jane",

    describe: function() {
        return "Person named " + this.name;
    }
};

print(jane);
print(jane.describe());
print(jane.iDontExist);//undefined

//POI: Object.keys returns an array of string containing all the keys of that object
//QRY: Does it return prototype keys too?
print(Object.keys(jane));//name, describe

jane.iWillBeDeletedLater = "Delete!";

//POI: Newly added key will be returned
print(Object.keys(jane));

//POI: Setting 'undefined' for an object key doesn't delete that key rather it just nullifies that key
jane.iWillBeDeletedLater = undefined;

print(jane.iWillBeDeletedLater);
print(Object.keys(jane));

//POI: delete keyword deletes the property/key from the object
//QRY: Can delete remove prototype properties? If so than will be deleted from that instance only or from
//the prototype?
//QRY: How to remove a property from prototype?
//TODO: Work more on return value of 'delete'

delete jane.iWillBeDeletedLater;
print(jane.iWillBeDeletedLater);
print(Object.keys(jane));

//POI: Property can be defined with bracket notation too
jane['property with bracket notation'] = 23.056;
print(jane['property with bracket notation']);

//POI: 'var'/ 'function' is a keyword. But that can be used as object key
jane.var = [ 56, { a: 0 } ];
jane.function = function() { }
jane.undefined = function() { }

//POI: Following is not valid (may be because of dot issue)
//jane.3.23 = "";

//Poi: But '3.23' (any numeric value) is a valid object key if used in literal object
print({ 3.23: "Three Point Twenty Three" });

print(Object.keys(jane));

//QRY: Why {}?
print(Object.getPrototypeOf(jane));//{}