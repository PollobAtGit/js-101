
'using strict'

function print(msg) {
    console.log(msg);
}

//Poi: This factory will create TOTALLY seperate objects each time it is invoked
var objectFactory = function(name, price, isAvailable) {
    var obj = {
        objName: name,
        objPrice: price,
        objIsAvailable: isAvailable,
        toString: function() {
            return this.objName + "\t" + this.objPrice + "\t" + this.objIsAvailable;
        }
    };

    return obj;
}

var objOne = objectFactory('HP', 10.23, true);
var objTwo = objectFactory('Canon', 589, false);

print(objOne.toString());
print(objTwo.toString());

//Poi: This won't change objOne because they are seperate objects having no reference to one another
objTwo.objName = 'Hino';

print(objOne.toString());
print(objTwo.toString());

print('objName' in objOne);
print(objOne.hasOwnProperty('objName'));

print('objName' in objTwo);
print(objTwo.hasOwnProperty('objName'));

//Poi: This statement will NOT add 'productCount' to objTwo
objOne.productCount = 10;

print(objOne);
print(objTwo);
