
function print(msg) {
    console.log(msg);
}

//POI: Object function creates an object. Empty object will be created if falsy (nothing, null, undefined)
//values are provided
print(Object());
print(Object(null));
print(Object(undefined));

print(Object() instanceof Object &&
    Object(null) instanceof Object &&
        Object(undefined) instanceof Object);//true

print(Object(true));//[Boolean: true]
print(Object(false));//[Boolean: false]

//POI: Boolean inherits Object
print(Object(true) instanceof Object && Object(true) instanceof Boolean);

print("\n");

//QRY: Can there be any use case where following might be required?
var person = { name: "NAME", age: 50, toString: function() { return this.name + "\t" + this.age; } };

//POI: Object(anotherObj) will create a new object that will reference 'anotherObj'
var personByObjectFunc = Object(person);

print(person.toString() + "\t" + personByObjectFunc.toString());
//QRY: Is it a comparison by reference or by property name & value
print("person === personByObjectFunc => " + (person === personByObjectFunc));//true

//POI: Delete a object property
delete person.age;

print("person === personByObjectFunc => " + (person === personByObjectFunc));//true
print(person.toString() + "\t" + personByObjectFunc.toString());//undefined printed in place of 'age'

print("\n");

var objObj = Object("Obj");
print(objObj);//[String: Obj]
print(objObj instanceof Object && objObj instanceof String);//POI: String is a type & that inherits Object
print(Object.keys(objObj));//[0, 1, 2] QRY: Is it character array index?

var numberObj = Object(20.23);
print(numberObj);//[Number: 20.23]
print(numberObj instanceof Number && numberObj instanceof Object);//true

//POI: No elements returned in array. This object has no property
//QRY: Does Object.keys(..) returns only own properties but not prototype properties?
print(Object.keys(numberObj));//[]

print("\n");

print(23.03 === Number(23.03));
print(23.03 === Object(23.03));
print((Object(23.03) instanceof Number) == true);

//POI: Number function doesn't return an instance of Number
//QRY: Why doesn't Number function returns an instance of Number
print((Number(23.03) instanceof Number) == false);//false

//POI: Number constructor returns an instance of Number
print((new Number(23.03) instanceof Number) == true);//true

//POI: Number when used as function doesn't return an object rather just the number
print(Number(23));

//POI: Number when used as a constructor returns a Number instance. Same is true for Object
print(new Number(23));
print(new Object(23));

print("\n");

//POI: Returns the string not an String instance
print(String("NAME"));

//POI: Returns a string instance not only String
print(new String("NAME"));