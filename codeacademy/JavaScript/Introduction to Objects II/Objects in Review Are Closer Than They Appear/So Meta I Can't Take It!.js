var prototypeType = typeof Object.prototype;
console.log(prototypeType);//'Object'

var hasOwn = Object.prototype.hasOwnProperty( "hasOwnProperty" );
console.log(hasOwn);//'true'
