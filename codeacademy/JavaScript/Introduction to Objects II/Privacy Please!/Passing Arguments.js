function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);

var myBalance = john.askTeller( 1234 );
console.log( myBalance );
myBalance = john.askTeller( 123 );
console.log( myBalance );