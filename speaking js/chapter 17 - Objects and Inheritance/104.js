
function print(msg) {
    console.log(msg);
}

//POI: Idea behind this checking is simply that '===' will ensure compared data are of same type
function isObject(value) {
    return value === Object(value);
}

function isObjectImproper(value) {
    return value == Object(value);
}

print(isObject(new Number(23.23)));

//POI: Following two are essentially same
print(isObject(Number(23.23)));
print(isObject(23.23));

print(isObject(new String(23.23)));

//POI: Following two are essentially same
print(isObject(String(23.23)));
print(isObject("23.23"));

print(isObject(new Boolean(true)));

//POI: Following two are essentially same
print(isObject(Boolean(true)));
print(isObject(true));

print("\n");

//POI: All of the below will return 'true' because '==' will not enforce type checking
print(isObjectImproper(23.23));
print(isObjectImproper("23.23"));
print(isObjectImproper(true));
