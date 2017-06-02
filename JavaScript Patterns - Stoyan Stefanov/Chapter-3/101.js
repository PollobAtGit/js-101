
function print(msg) {
    console.log(msg);
}

//POI: Object creation with literal notation
var dog = { kind: 'Dog' };
print(dog);//{ kind: 'Dog' }

//POI: Object creation using constructor
var cat = new Object();
cat.kind = 'Cat';

print(cat);//{ kind: 'cat'}

//--------------------------- CATCH WITH Object CTOR -------------------------------------

var aNumber = new Object(10);

print(aNumber);

print(typeof aNumber === 'object');//object
print(aNumber instanceof Object === true);//true

//CATCH: aNumber is NOT only an Object rather a Number
print(aNumber instanceof Number == true);

//POI: The constructor is pointing to the 'Number' constructor. Number constructor had been used to create the Object
print((aNumber.constructor == Number) === true);//true

//POI: Object constructor delegates the responsibility to create object to another constructor because Object constructor first checks
//the value passed as argument & tries to find out proper constructor for that type. If the constructor gets a string argument than
//responsibility to create string is passed to String constructor & the same is applicable for Number & all other built-in types for which
//constructor exists
var aString = new Object("STRING");

print(aString);

print(typeof aString === 'object');
print(aString instanceof Object === true);
print(aString instanceof Number !== true)

//POI: The constructor property is pointing to the String constructor. So the String constructor had been used to create the object
print((aString.constructor === String) === true);

//POI: The new object is not a Object only also a String
print(aString instanceof String === true);
