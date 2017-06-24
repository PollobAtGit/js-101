
var print = function (msg) {
    console.log(msg);
};

var obj = {

    name: 'PHONE'

    , sayMyName: function () {
        return this.name;
    }
};

var iInvokeCallBack = function (context, callback) {

    //BP: If the function doesn't make sense without context then every invocation will involve mentioning the context
    // which is eliminated here

    //POI: Getting a reference to the function
    //POI: Getting a function reference/creating an alias all creates a duplicate reference to the original function
    //POI: When aliasing a function the context is always undefined. Bind/Call/Apply must be used to bind a context

    var callBackProperty = typeof context === 'object' && typeof callback === 'string' ? context[callback] : undefined;

    //POI: Before function invocation it is essential to check whether the function is callable or not
    var callBackFunc = typeof callBackProperty === 'function' ? callBackProperty.bind(context) : undefined;

    if (callBackFunc) {
        return callBackFunc();
    }

    return undefined;
};

print(iInvokeCallBack(obj, "sayMyName"));//PHONE
