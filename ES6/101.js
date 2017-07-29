
// MI: let makes variables blocked scoped

(function () {

    console.log(isFunctionScoped);//undefined

    // POI: let makes the variable block scoped. It has nothing to do with
    // type scripts variable type
    // console.log(isBlockScoped);

    if (true) {

        // POI: isBlockScoped is scoped by the if-else condition
        let isBlockScoped = true;

        var isFunctionScoped = true;
    }
})();


(function () {
    console.log(i);//undefined

    for (var i = 0; i < 10; i = i + 1) {
        console.log(i);
    }

    console.log(i);//10
})();

console.log();

(function () {

    // POI: The variable will be hoisted
    var __func = function (j) {

        // POI: Returned function doesn't take any argument
        return function () {

            // POI: This is the argument passed to the orginal function
            console.log(j);
        }
    };

    for (var i = 0; i < 5; i = i + 1) {

        setTimeout(__func(i), 2000);

        // POI: IIF
        (function (k) {
            setTimeout(function () {
                console.log(k)
            }, 2000);
        })(i);
    }
})();

console.log();

(function () {

    // POI: This works properly because let creates a variable with block scoping
    for (let i = 10; i < 15; i = i + 1) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
})();

console.log();