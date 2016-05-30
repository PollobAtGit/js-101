function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   //Private method ('var' keyword)
   var returnBalance = function () {
      return bankBalance;//'this' doesn't work here !
   };

   //'this' is essential as it signifies property that the class owns
    this.askTeller = function () {
        return returnBalance;
    }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);
