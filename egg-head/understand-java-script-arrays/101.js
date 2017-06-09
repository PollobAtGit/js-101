
function print(msg) {
    console.log(msg);
}

var arr = [1, 2, 3];

print(arr);
print(arr.concat(4));
print(arr.concat(undefined, 'String'));

//POI: Concat PULLS up every record from the FIRST LEVEL of arrays
print(arr.concat(["CONACAT", null, undefined], [10, 65]));

//POI: Concat PULLS up every record from the FIRST LEVEL BUT DOESN'T do it for inner arrays inside the
//FIRST LEVEL of array
print(arr.concat([-96, 85, [undefined, null, "VS CODE"], 23]));

//POI: Inner array '[undefined, null, "VS CODE"]' is considered as one element
print(arr.concat([-96, 85, [undefined, null, "VS CODE"], 23]).length);//7


// ------------------------------ ARRAY OF OBJECTS ------------------------------------

var persons = [{ name: "SIMON" }, { name: "AYON" }];
var otherPersons = [{ medicine: "BIO-DATA" }, { cost: 63.23 }];

//TODO: Why 'concat' works properly without using 'call'?

print(Array.prototype.concat.call(persons, otherPersons));
print(Array.prototype.concat.call(persons, otherPersons).length);//4

print(Array.prototype.concat.call(otherPersons, [1, 2]));
print(Array.prototype.concat.call(otherPersons, [10, 30, [89, 52], "STRING"]));

Array.prototype.forEach.call(persons, function (element) {
    console.log(element.name);
});