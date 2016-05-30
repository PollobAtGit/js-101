function Person(name,age) {
  this.name = name;
  this.age = age;
}

var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

var me = new Person("Karioki", 26);
printPersonName( me );
