
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