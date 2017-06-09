
function print(msg) {
    console.log(msg);
}

var ObjectMaker = function () {

    this.name = "I AM AN OBJECT MAKER";

    //POI: Because this constructor doesn't EXPLICITLY returns any object, if client uses this constructor as a function (without new)
    //then the 'this' here will impact the GLOBAL object. In case of browser that is the 'Window'
    //POI: Following statement is put by JS interpreter (not strictly speaking)
    //return this;
}

var aObjectMaker = new ObjectMaker();
print(aObjectMaker.name);

var AnotherObjectMaker = function () {

    //POI: Following is what happens when 'this' is created behind the scene
    //POI: Most probably it sets the 'constructor' property properly to 'AnotherObjectMaker'
    var that = Object.create(AnotherObjectMaker.prototype);

    that.name = "I AM ANOTHER OBJECT MAKER";

    //POI: If we want to avoid using 'this' for some reason, we can use this pattern
    return that;
}

//POI: The function returns 'that' NOT default 'this'
var anotherObjectMaker = new AnotherObjectMaker();
print(anotherObjectMaker.name);

//POI: Not using 'new'. Assume that developer has forgotten to use 'new' & JS will not force using 'new'

//POI: This constructor EXPLICITLY returns the created object. So with or without 'new', it will work expectedly
var invalidObjectMaker = AnotherObjectMaker();

//POI: This constructor doesn't EXPLICITLY returns the created object. So to get the object properly the client HAS to dependent on
//built-in 'new' mechanism

//POI: Following is not valid in fact throws exception because 'name' is NOT DEFINED at this phase
//print(name);

var aInvalidObjectMaker = ObjectMaker();

//POI: 'name' IS DEFINED here because 'ObjectMaker' has been used AS A FUNCTION NOT A CONSTRUCTOR. Which means the 'this' inside the
//function/constructor referred to the GLOBAL object
print("name => " + name);

//POI: 'this' is valid outside of function/constructor scope. Here 'this' refers to the GLOBAL object
print(this);//{}

//POI: Why following is 'undefined'?
print(this["name"]);//undefined

print(invalidObjectMaker);//valid object
print(aInvalidObjectMaker);//undefined

print(typeof invalidObjectMaker);//object
print(invalidObjectMaker.constructor === AnotherObjectMaker);//true

//POI: Because 'aInvalidObjectMaker' is NOT defined. It was not used as a constructor. So no 'return' was issued
print(typeof aInvalidObjectMaker);//undefined

//POI: In 'ECMAScript5' following is totally invlaid & throws error because 'this' is ONLY valid inside a constructor
print(this);
