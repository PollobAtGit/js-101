
// Using 'this' keyword
var setAge = function (newAge) {
    this.age = newAge;
};

var bob = new Object();
bob.age = 30;

bob.setAge = setAge;
bob.setAge(50);

console.log(bob.age);

var susan = new Object();
susan.age = 100;

susan.setAge = setAge;
susan.setAge(33);

console.log(susan.age);

//Not using 'this' keyword
var setAge = function (newAge) {
    age = newAge;//This doen't work as 'age' here is not defined properly.
};

var unUsedObj = new Object();
unUsedObj.age = 56;
unUsedObj.setAge = setAge;
unUsedObj.setAge(20);//Doesn't set age (Stays '56': Default).

console.log(unUsedObj.age);
