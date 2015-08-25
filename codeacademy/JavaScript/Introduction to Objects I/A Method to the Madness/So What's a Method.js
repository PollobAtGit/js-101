
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

//Method as object property
bob.setAge = function (newAge){
    bob.age = newAge;
};

bob.setAge(20);

console.log(bob.age);

//Object method with 'object literal notation'
var bob = {
    name: "Bob"
    , age: 56
    , setName: function (name) {
        bob.name = name;
    }
};

bob.setName("Bob Scrolling");
console.log(bob.name);

//Define another property for object bob and set that with another method property
bob.parentName = "";
bob.setParentName = function (parentName) {
    bob.parentName = parentName;
}

bob.setParentName("Michel Jordan");
console.log(bob.parentName);