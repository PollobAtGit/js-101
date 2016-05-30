var array = [
    {name: "Pollob", job: "Programmer"}
    , {name: "Mum", job: "Senior Programmer"}
    ];

array;
array[0];
array[1];

array[0] === array[1];//false: Here comparing with reference

var objOne = {book: "Oxford dictionary"};
var objTwo = objOne;

objOne == objTwo

var objThree = {book: "Speaking JS"};
objOne == objThree;
objTwo == objThree;