/**
 * Created by pollob on 4/21/2017.
 */

function print(msg) {
    console.log(msg);
}

//POI: Primitive types has a wrapper over it to make working with it easier. JS primitive types are String, Number, Boolean, null & undefined. Among these five
//types there's wrapper for only three. They are String, Number & Boolean. Wrapper over other types (null & undefined) doesn't make any sense

var nameStr = 'WORLD-WIDE';

//POI: 'length' is a property of String. But String is a primitive type it is not supposed to have any property!
print(nameStr.length);

//POI: Above statements are evaluated by JS interpreter as follows:

var anotherNameStr = 'THOUSAND';
//POI: This assignment will not work because 'anotherNameStr' is a primitive type, it's not an object or any reference type. So it can't hold any other property
anotherNameStr.someName = 'SOME_NAME';

//POI: We could have easily used String function (without new)
var anotherNameStrWrapper = new String(anotherNameStr);

//POI: The value of 'someName' will not be propagated to the string wrapper because the primitive doesn't hold the property 'someName'
print(anotherNameStrWrapper.someName);//undefined

print(anotherNameStrWrapper.length);

//POI: This assignment will work though because the instance is an reference type of String. A reference type can have properties
anotherNameStrWrapper.lastName = 'LAST';
print(anotherNameStrWrapper.lastName);

//Converting a primitive string to it's reference representation
var anotherStrCtor = new String('Constructor');

//POI: This is called casting. Not creating a new String
var anotherStrWrapperFunction = String('String function');

print(anotherStrCtor);
print(anotherStrWrapperFunction);

//POI: All of the above will be converted to string value such as 'null', 'undefined', 'NaN'
//QRY: Why?
print(new String(null));
print(new String(undefined));
print(new String(NaN));

//POI: Created reference type will contain [Object Object]
//QRY: Why?
print(new String({name: "Some Name I don't Care About"}));

//POI: Cast preserves the original value, doesn't convert to string representation
print(String(null));//null
print(String(undefined));//undefined
print(String(NaN));//NaN
print(String({name: "Some Name I don't Care About"}));//[object object]

//POI: This comparison will not work because one is Object type another is primitive type. '==' will work that's not the best practice
print(new String('STRING') === 'STRING');//false

//POI: Cast returns a primitive type not a reference type
print(String('STRING') === 'STRING');//true

//POI: Following statements prove casted value is primitive type and has no relation with reference types in general
print(String('') instanceof String);//false
print(String('') instanceof Object);//false

print(typeof new String(''));//object

//POI: Primitive type
print(typeof String(''));//string

print(new String() instanceof String);//true

//POI: '' is a primitive type not reference type
print('' instanceof String);//false

//POI: String() will cast the given value to String & return type will be a primitive type
print(String('') instanceof String);//false

print(new Number() instanceof Number);//true

//POI: 1 is a primitive type not reference type
print(1 instanceof Number);//false

//POI: Casted returned value is a primitive type not reference type
print(Number('') instanceof Number);//false

//POI: Returned value is a reference type not primitive type
print(new Boolean() instanceof Boolean);//true

//POI: Given value is a primitive type not a reference type
print(true instanceof Boolean);//false

//POI: Casted return value is a primitive type not a reference type
print(Boolean() instanceof Boolean);//false
