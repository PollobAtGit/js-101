
//Poi: split contains NOTHING. This will split the string into it's constituent character parts
//Poi: This is not allowed in C# for example. EMPTY can NOT be used rather ToArray()
var arrayOne = "john".split("");//'j o h n' AFTER next line is executed 'n h o j'

//Poi: reverse() returns the reversed sequence AND ALSO reverses the ORIGINAL sequence
//Poi: reverse() returns the REFERENCE to the original array. It's a DEEP COPY. NOT SHALLOW COPY
var arrayTwo = arrayOne.reverse();//n h o j AFTER this line is executed 'arrayOne' is 'n h o j' too

var arrayThree = "jones".split("");//j o n e s

//Poi: Because reverse() returns a REFERENCE 'arrayTwo' is simply a reference to 'arrayOne'. So BOTH
//arrayOne & arrayTwo will be modified by this statement not only 'arrayTwo'
//Poi: Pushed value is AN ARRAY itself NOT the contents of the pushed array. So arrayTwo is as follows:
//['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 'e']] <= Note the array inside array
arrayTwo.push(arrayThree);//'n h o j [j o n e s]' AFTER this line is executed arrayOne is 'n h o j [j o n e s]'

//Poi: negative integer for slice reutrns ALL elements from the nth value counting backword
console.log("array 1: length=" + arrayOne.length + " last=" + arrayOne.slice(-1));//array 1: length=4 last=o h n
console.log("array 2: length=" + arrayTwo.length + " last=" + arrayTwo.slice(-1));//array 2: length=9 last=h o j j o n e s