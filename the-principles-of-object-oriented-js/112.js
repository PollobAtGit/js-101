
function print(msg) {
    console.log(msg);
}

var obj = {
    age: 10,
    address: null,
    toString: function () {
        return Array.prototype.join([this.name, this.age, this.address], ", ");
    }
};

Object.setPrototypeOf(obj, { name: "JOHN" });

function showAllEnumerableOwnProperties(obj) {

    //POI: Object.keys return OWN & ENUMERABLE properties
    //POI: 'name' will not be shown because that's in the prototype
    var allEnumerableOwnProperties = Object.keys(obj);
    var length = allEnumerableOwnProperties.length;
    while (--length >= 0) {
        var propertyKey = allEnumerableOwnProperties[length]
        print(propertyKey + " => " + obj[propertyKey]);
    }
}

showAllEnumerableOwnProperties(obj);