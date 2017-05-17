
function print(msg) {
    console.log(msg);
}

var person = Object.create({ name: "JOHN" });

//POI: Properties defined using bracket or dot notation are by default 'enumerable'
person["title"] = "Writer";

//POI: 'in' considers prototype chain
print("title" in person);
print("name" in person);

print(person.propertyIsEnumerable("title"));//true
print(person);//{ title: 'Writer }

//POI: Returns enumerable & own properties
print(Object.keys(person));//['title']

print(person.hasOwnProperty("title"));//true

print(Object.prototype.hasOwnProperty("hasOwnProperty"));//true
print(Object.prototype.hasOwnProperty("hasOwnProperty"));//true

//-- IDENTIFY WHETHER A PROPERTY ONLY EXISTS IN PROTOTYPE CHAIN OR NOT

//TODO: Move this function to Object's prototype
function propertyExistsOnlyInPrototype(obj, key) {
    return obj && key in obj && !obj.hasOwnProperty(key);
}

print(propertyExistsOnlyInPrototype(person, "title"));//false
print(propertyExistsOnlyInPrototype(person, "name"));//true

//POI: Interesting check. Checked properties are actually 'Object' properties
print(propertyExistsOnlyInPrototype(person, "hasOwnProperty"));//true
print(propertyExistsOnlyInPrototype(person, "toString"));//true