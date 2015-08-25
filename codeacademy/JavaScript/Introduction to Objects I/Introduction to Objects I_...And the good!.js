var fizzBuzzToNth = function () {
    for (var i = 1; i <= 20; i++) {
        fizzBuzz(i);
    }
}

var fizzBuzz = function(number) {

    var isDivisibleByThree = (number%3 === 0);
    var isDivisibleByFive = (number%5 === 0);

    if(number === 0) {
        console.log("0");
    }

    if(isDivisibleByThree && isDivisibleByFive) {
        console.log("FizzBuzz");
    } else if (isDivisibleByThree) {
        console.log("Fizz");
    } else if (isDivisibleByFive) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

fizzBuzzToNth();