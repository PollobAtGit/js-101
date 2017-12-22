
namespace OneOOne {

    function print(obj: any) {
        console.log(obj);
    }

    let isDone: Boolean = false;

    print(isDone);

    isDone = true;

    print(isDone);

    // POI: Following is not valid because isDone is Boolean but we are trying
    // to assign string
    // isDone = "";

    let num: Number = 10;
    let floatNum: Number = 10.23;
    let binaryNum: Number = 0b1010;// POI: Prints the decimal representation
    let octalNum: Number = 0o10;// POI: Prints the decimal representation
    let hexNum: Number = 0xFF;// POI: Prints the Hex representation

    print(num);
    print(floatNum);
    print(binaryNum);
    print(octalNum);
    print(hexNum);

    let firstName: String = "JOHN";
    let lastName: String = "STAMOSH";
    let fullName = firstName + " " + lastName;

    print(fullName);

    // POI: Using string template. Similar to string interpolation
    let greeting: String = `Hi! My full name is ${fullName}`;
    print(greeting);

    lastName = firstName;
    fullName = firstName + " " + lastName;

    print(fullName);

    print(`99 + 1 = ${99 + 1}`);

    let numbers: Number[] = [0, 1, 2, 3];

    // TODO: What's the difference between Number & number?
    let numbersMultipliedByTen: Array<number> = numbers.map(function (ele: number) {
        return ele * 20;
    });

    numbersMultipliedByTen.forEach(function (ele: number) {
        print(ele);
    });
}