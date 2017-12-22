var OneOOne;
(function (OneOOne) {
    function print(obj) {
        console.log(obj);
    }
    var isDone = false;
    print(isDone);
    isDone = true;
    print(isDone);
    // POI: Following is not valid because isDone is Boolean but we are trying
    // to assign string
    // isDone = "";
    var num = 10;
    var floatNum = 10.23;
    var binaryNum = 10; // POI: Prints the decimal representation
    var octalNum = 8; // POI: Prints the decimal representation
    var hexNum = 0xFF; // POI: Prints the Hex representation
    print(num);
    print(floatNum);
    print(binaryNum);
    print(octalNum);
    print(hexNum);
    var firstName = "JOHN";
    var lastName = "STAMOSH";
    var fullName = firstName + " " + lastName;
    print(fullName);
    // POI: Using string template. Similar to string interpolation
    var greeting = "Hi! My full name is " + fullName;
    print(greeting);
    lastName = firstName;
    fullName = firstName + " " + lastName;
    print(fullName);
    print("99 + 1 = " + (99 + 1));
    var numbers = [0, 1, 2, 3];
    // TODO: What's the difference between Number & number?
    var numbersMultipliedByTen = numbers.map(function (ele) {
        return ele * 20;
    });
    numbersMultipliedByTen.forEach(function (ele) {
        print(ele);
    });
})(OneOOne || (OneOOne = {}));
