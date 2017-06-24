
//POI: Strict mode doesn't only parse the code statically. It also also considers the execution path
//because in this mode 'print(iInvokeCallBack(obj.sayMyName));' will throw error because 'this' is not defined
//for this statement

//'use strict';

var print = function (msg) {
    console.log(msg);
};

var name = "ANOTHER OBJECT";

var obj = {
    name: "OBJECT"

    //POI: un-named function expression
    , sayMyName: function () {
        return this.name;
    }
};

var iInvokeCallBack = function (callBack) {
    if (typeof callBack === 'function') {
        return callBack();
    }
    return undefined;
};

var iInvokeCallBackWithGivenContext = function (callBack, context) {
    if (typeof callBack === 'function') {
        return callBack.call(context);
    }
    return undefined;
};

var iInvokeMethodForGivenContext = function (context, callBack) {

    //POI: 'callBack' can work properly only & only if 'callBack' is a string
    if (typeof context === 'object' && typeof callBack === 'string') {

        //POI: Using thrid brcaket so that the string is evaluated to get the property of the object
        return context[callBack]();
    }

    //POI: I a function/method is provided with a obj then that function/method can invoke methods/properties over
    //that object
    return context.sayMyName();
};

var iInvokeCallBackObj = function (callBack) {

    this.name = 'IInvokeCallBack';
    this.otherName = undefined;

    if (typeof callBack === 'function') {

        //TODO: Will 'this.name' refer to 'name' property of this object?
        this.otherName = callBack();
    }
};

print(obj.sayMyName());

// POI: When call back is invoked, it is invoked inside 'iInvokeCallBack'. This is not defined inside that function
//TODO: Does in this case 'this' refers to the global object? If it did, then 'name' variable ('ANOTHER OBJECT') defined
//above would have been evaluated. But that's not what is happening
print(iInvokeCallBack(obj.sayMyName));//undefined

//POI: We are passing the function reference with the context bound with it
print(iInvokeCallBack(obj.sayMyName.bind(obj)));//OBJECT

print(new iInvokeCallBackObj(obj.sayMyName.bind({ name: 'SOME' })).otherName);//SOME

print(iInvokeCallBackWithGivenContext(obj.sayMyName, obj));//OBJECT

//POI: The property or function name is provided as a string
print(iInvokeMethodForGivenContext(obj, "sayMyName"));
