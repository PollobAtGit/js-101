
function print(msg) {
    console.log(msg);
}

//POI: Object function creates an object. Empty object will be created if falsy (nothing, null, undefined)
//values are provided
print(Object());
print(Object(null));
print(Object(undefined));

print(Object() instanceof Object && Object(null) instanceof Object && Object(undefined) instanceof Object);

print(Object(true));//[Boolean: true]
print(Object(false));//[Boolean: false]

//POI: Boolean inherits Object
print(Object(true) instanceof Object && Object(true) instanceof Boolean);