
'use strict';

function print(msg) {
    console.log(msg);
}

//POI: Following two ways of array declaration are same
//QRY: Is there any best practices?
var arrayByCtor = new Array("Boy", "Torch", 12, 23.02, { name: "Jane" });
var arr = ["Boy", "Torch", 12, 23.02, { name: "Jane" }];

print(arrayByCtor);
print(arr);