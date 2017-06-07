
function print(msg) {
    console.log(msg);
}

//POI: This will also work. Declaring a variable without 'var' keyword makes that variable a global variable
aVal = 50;
//var aVal = 50;

function hoistingDemo() {

    //POI: undefined NOT 50 because aVal IS DEFINED in this scope but NOT INITIALIZED before this usage
    print("aVal : " + aVal);//undefined

    var aVal = 10;
    //POI: Here aVal is both DEFINED & INITIALIZED
    print("aVal : " + aVal);//10
}

function iAmSameAsHoistingDemo() {

    //POI: By default variables are hoisted IN A DEFINED SCOPE. In that case following is what happens. 'undefined' is assigned to that variable
    var aVal = undefined;

    //POI: Makes sense because 'undefined' has been assigned to the variable
    print("aVal : " + aVal);//undefined

    aVal = 10;
    print("aVal : " + aVal);//10
}

function getGlobalValueProperly() {
    print("aVal : " + aVal);//50
}

hoistingDemo();
iAmSameAsHoistingDemo();
getGlobalValueProperly();

//TODO: Why doesn't following work? 'iAmGlobal' should be defined in global scope because no 'var' is associated with it
function demo() {
    iAmGlobal = "iAmGlobal"
}

//print(iAmGlobal);
