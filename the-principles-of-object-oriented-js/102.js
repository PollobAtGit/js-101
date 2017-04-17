
function print(msg) {
    console.log(msg);
}

var name = "nicholas";

print(name.toLowerCase());
print(name.toUpperCase());

function getAllCharacters(str) {
    var charArrayByIndex = [];
    var charArrayByCharAt = [];

    for (var i = 0; i < str.length; i++) {
        //POI: Using str.charAt(index) to get the character at that index
        Array.prototype.push.call(charArrayByCharAt, str.charAt(i));

        //POI: Characters from string can be retrieved using index via bracket notation
        Array.prototype.push.call(charArrayByIndex, str[i]);
    }

    return {
        "Char Array By Index": charArrayByIndex,
        "Char Array By Char At": charArrayByCharAt
    };
}

print(getAllCharacters(name));
print(name.substring(2, 5));
print(name.substring(2, 5).length);

var count = 20;

print(count.toFixed(2));

print(count);
print(count.toString());
print(count.toFixed(4).toString());

//QRY: What can be provided in constructor as parameter?
var obj = new Object();
print(obj);//{}

//POI: The first parmeter is the prototype of the object
var anotherObj = Object.create({});
print(anotherObj);//{}

var anotherOneObj = {};
print(anotherOneObj);//{}

//POI: De-reference object. Now the object in heap is ready for collection by garbage collector
anotherOneObj = null;

//POI: Assigned value is 'null' not undefined
print(anotherOneObj);//null

var array = new Array();

//POI: Object will be instantiated with current date & time
var date = new Date();
var regexp = new RegExp("\\d+");
var objByObjectCtor = new Object();
var func = new Function("console.log('Hi');");

print(array);
print(date);
print(regexp);
print(objByObjectCtor);
print(func);

var error = new Error("Some ERROR occurred");

//POI: Following will throw error directly. So any operation on the object reference will
//eventually throw error
// print(error);

//POI: Function is being executed
func();//Hi