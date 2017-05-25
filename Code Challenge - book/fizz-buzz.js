
function fizzBuzz(n) {

    var sequence = [];
    for (var i = 1; i <= n; i++) {

        var status = "";

        if(i % 3 === 0) status += "Fizz";
        if(i % 5 === 0) status += "Buzz";

        if(status === "") status += i;

        Array.prototype.push.call(sequence, status);
    }

    return sequence;
}

console.log(Array.prototype.join.call(fizzBuzz(50), ", "));