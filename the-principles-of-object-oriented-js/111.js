
function print(msg) {
    console.log(msg);
}

var protoObj = { name: "NAME" };
var obj = Object.create(protoObj);

obj["age"] = 100;

print(protoObj);

//POI: Will evaluate only own properties
print(obj);

print("age" in obj);
print(delete obj["age"]);
print("age" in obj);

print("name" in obj);

//POI: 'delete' doesn't delete an object property from the object if that property is an inherited one
print(delete obj["name"]);

//POI: 'name' still exists in object because it was inherited from 'protoObj' & 'delete' only works on
//OWN property
print("name" in obj);

var anotherObj = { name: "NAME", sayMyName: function () { } };

print(anotherObj);

print(Object.keys(anotherObj));

print(anotherObj.propertyIsEnumerable("name"));//true
print(anotherObj.propertyIsEnumerable("sayMyName"));//true
