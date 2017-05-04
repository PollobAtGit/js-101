
function print(msg) {
    console.log(msg);
}

/**
 * @param  {} obj
 * @param  {} property
 */
function checkPropertiesExistanceRightApproach(obj, property) {
    if (typeof property !== "string" || !(obj instanceof Object)) return;

    //POI: Properly checks the existance of any object property
    //POI: 'in' will conside both own properties & properties in prototype chain
    //QRY: Will 'in' consider non-enumerable properties?
    if (property in obj) return true;
    return false;
}

/**
 * @param  {} obj
 * @param  {} property
 */
function checkPropertiesExistanceWrongApproach(obj, property) {
    if (typeof property !== "string" || !(obj instanceof Object)) return;

    //POI: Not proper way to check properties existance
    if (obj[property]) return true;
    return false;
}

var obj = {
    name: "SOME NAME",
    age: 0,
    address: null,
    birthDate: undefined
}

print(checkPropertiesExistanceWrongApproach(obj, "name"));

//POI: All of the following will return wrong result even though all of the properties actually exist in the obj
print(checkPropertiesExistanceWrongApproach(obj, "age"));//false
print(checkPropertiesExistanceWrongApproach(obj, "address"));//false
print(checkPropertiesExistanceWrongApproach(obj, "birthDate"));//false

//POI: All of the following will return proper result
print(checkPropertiesExistanceRightApproach(obj, "name"));
print(checkPropertiesExistanceRightApproach(obj, "age"));//true
print(checkPropertiesExistanceRightApproach(obj, "address"));//true
print(checkPropertiesExistanceRightApproach(obj, "birthDate"));//true
