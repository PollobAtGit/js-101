function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

var myAge = 10;
john.age = myAge;

console.log( john.firstName + " " + john.lastName );
console.log( john.age );
