
'using strict'

function print(msg) {
    console.log(msg);
}

var objBluePrint = function () {

};

var objOne = new objBluePrint();
var objTwo = new objBluePrint();

print(objOne.name);//undefined
print(objTwo.name);//undefined

//Poi: This will add 'name' property to BOTH 'objOne' & 'objTwo'
objBluePrint.prototype.name = "no name";

print(objOne.name);
print(objTwo.name);

//Poi: This WON'T change 'objOne' object's 'name' property value
objTwo.name = "object two name";

print(objOne.name);
print(objTwo.name);
