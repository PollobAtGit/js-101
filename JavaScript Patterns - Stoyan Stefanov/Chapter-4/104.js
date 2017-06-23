
var print = function (msg) {
    console.log(msg);
};

var isAJSFunction = function (func) {
    return typeof func === 'function';
}

var iInvokeCallBack = function (callback) {

    //BP: Check whether callback should be invoked. 'callback' might contain anything other than function
    var isCallBackDefined = isAJSFunction(callback)

        //POI: 'length'  property on function will return the number of expected (explicitly mentioned)
        //arguments by that function

        //POI: Using the declared variable above. Might not be a better practice
        //POI: May be this is the approach that jQuery follows to handle multiple types of callbacks
        
        , isArgumentCountTwo = (isCallBackDefined && callback.length === 2)
        , i = 0;

    //POI: Technically initialization for 'i' is not necessary here
    for (i = 0; i < 5; i = i + 1) {

        //...... Other Logic

        if (isArgumentCountTwo) {

            //POI: Value is put into the callback from the consumer of the call back. So there must be a contract between
            //consumer & definer of the call back (explicitly mentioned by consumer) about what the call back will get as
            //argument so that definer of the call back can construct the logic properly

            callback(i, "INDEX");
        } else if (isCallBackDefined) {
            callback(i);
        }

        //...... Other Logic

    }
};

//POI: Client code. Client should only care about the callback logic & which arguments are passed at which position
iInvokeCallBack(print);//0....4

print('');

//POI: From client's perspective, consumer of the call back will put the index in the first argument & the custom message
//at the second argument
iInvokeCallBack(function (i, msg) { print(msg + " => " + i); });
