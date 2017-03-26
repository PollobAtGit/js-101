
//Poi: In JS, 0 or '0' all will be converted to false & thus all of this can be used in
//conditional statements
console.log(false == '0');//true

console.log(false == 0);
console.log(false == {});//false

console.log(false == null);//false

//Poi: 'null' is equivalent to 'false' but 'false == null' IS false
if(null) {
    console.log("EMPTY");
} else {
    console.log("NOT EMPTY");
}

//Poi: This is a strict comparison. So no conversion will occur
console.log(false === '0');//false
