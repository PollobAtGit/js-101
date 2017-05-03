/**
 * Created by pollo_000 on 5/3/2017.
 */

function print(msg) {
    console.log(msg);
}

//POI: This function is not in any context though if used as a context than it will become the context itself
function sayMyName(lastName) {
    return this.firstName + " " + lastName;
}

var personOne = { firstName: "NICHOLAS"};
var anotherPerson = { firstName: "NICHOLAS THE GREAT"};

//POI: Giving the function a context but not providing the argument necessary. So need to provide that when invoking the function
var funcPointerPersonOne = sayMyName.bind(personOne);

print(funcPointerPersonOne("PAULO"));

//POI: Providing new context to the function along with the required argument
var funcPointerPersonTwo = sayMyName.bind(anotherPerson, "XI");

//QRY: What if argument is provided? Will it override the previously bound value 'XI'?
print(funcPointerPersonTwo());

//POI: Value is already bound. So 'XI' will not be overridden with 'BIO'
print(funcPointerPersonTwo("BIO"));

//POI: Function pointer assignment
//POI: Different object is bound to this function
personOne["sayMyName"] = funcPointerPersonTwo;

//POI: 'NICHOLAS' is bound as firstName to 'personOne' still returned value is different which is of anotherPerson
print(personOne["sayMyName"]());//NICHOLAS THE GREAT XI
