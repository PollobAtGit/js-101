'use strict'

function print(msg) {
    console.log(msg);
}

var obj = {
    "i guess i am property": "AnY vAlUee?",
    6: "SIX",
    describe: function() {
        return this["i guess i am property"] + " " + this[6];
    },
    "you can't access me without bracket notation": function() {
        return this["i guess i am property"] + " " + this[6];
    }
};

//Poi: Returns an array of object property names
print(Object.keys(obj));

var keyName = "i guess" + " " + "i am property";

//POI: Object key value is acccessed via computed property. Useful feature
print(obj["i guess" + " " + "i am property"]);

//POI: Object key value is acccessed using a variable value which is a computed value
//POI: This approach doesn't work with dot notation because in that case a property
//with the variable name will be searched for

print(obj[keyName]);

//POI: obj[6] is not a element accessor for array rather value accessor using key. In this case, '6' will
//be converted into string representation of '6'

//POI: Both returns 'SIX'

print(obj[6]);
print(obj['6']);

//POI: Computed value can be numeric too because ultimately numeric will be converted into string
print(obj[3 + 3]);

print(obj.describe());

//POI: Function accessing using bracket notation but executing using first bracket
print(obj["you can't access me without bracket notation"]());