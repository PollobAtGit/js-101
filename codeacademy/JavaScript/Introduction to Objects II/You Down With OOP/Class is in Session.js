function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

function Circle( radius ) {
	this.radius = radius;
}

var aCircle = new Circle( 4.23 );

console.log( aCircle );
console.log( aCircle.radius );