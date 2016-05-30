function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

function Emperor ( name ) {
    this.name = name;
}

Emperor.prototype = new Penguin( "Lucy" );

var aEmperor = new Emperor( "Akbar" );
console.log( aEmperor.numLegs );