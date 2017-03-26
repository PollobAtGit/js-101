
//Poi: Numeric value will be converted to string because JS assumes string concatenation is required
console.log(1 + "2" + "2");//122

//Poi: +"2" will take precedence over any operation. In this case, it is a unary operation which will convert
//string '2' to it's numeric counterpart. Then arithmetic operation will be performed between '1' & '2'
//(converted version) which will result in '3' which then will be concatenated with '2' causing output to be
//'32'
console.log(1 + +"2" + "2");//?     //32

//Poi: Similar to before -"1" will be converted to it's numeric counterpart '1' but because of '-' (unary
//operator), it will considered as a negative number resulting an expression as '1 - 1' which will result
//in '0' which then will be concatenated with '2' resulting '02'
console.log(1 + -"1" + "2");//?     //02

//Poi: Difference between this & the previous one is that +"1" will be converted to positive '1' but then
//will again be converted into string again because it won't find any numeric value to operate on
console.log(+"1" + "1" + "2");//?   //112

//Poi: '-' operator can't be applied on strings also "A" or "B" both are non-numeric. So '-' forces arithmetic
//operation which is NOT valid for alpha characters. So it causes NaN.
console.log( "A" - "B" + "2");//?   //NaN2

console.log( "A" - "B" + 2);//?     //NaN