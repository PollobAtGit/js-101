
//"use strict";

//POI: Incase of function Expression, make sure to append ';' (semi-colon) at the end
var print = function (msg) {
    console.log(msg);
};

//POI: Following throws 'Unexpected Token (' because JS expects a function name which doesn't exist
// function () { }

//POI: On the contrary to the above function declaration, following function declaration works properly because wrapping the function in parathesis forces JS interpreter to consider
//the wrapped statement as function
(function () { });

//POI: IIFE DOESN'T expose any property or method unless that's intentionally done
//POI: If we do the following with function declaration, we can encapsulate secretKey but can't encapsulate the function itself. The function will be part of the global object
//which in turn means the function will pollute GLOBAL namespace
(function () {
    var secretKey = 10.01; 
})();

function someSecretKey () {
    //POI: The variable is 'var' so it will not be a GLOBAL variable
    var secretKey = 10.02; 
}

//POI: secretKey is NOT defined because that's scoped insode
//print(secretKey);

someSecretKey();

var obj = (function() {
    console.log('PRINT');
})();

obj;//PRINT

//POI: 'obj' is NOT invoked again
//POI: Singleton?
obj;
obj;

//POI: '+' symbol with some other operators make function expression
+function () { }
-function () { }
/function () { }
*function () { }
%function () { }
~function () { }

function Editor() {

    //------------------- PRIVATE INTERFACE -------------------------------------------------------------------------

    //POI: This porperty is not attached to 'this' causing it to be PRIVATE property
    var version = "v.0.23";

    //POI: This invocation works because function 'innerEditor' is hoisted INSIDE it's enclosing scope & in this case enclosing scope is the scope defined by 'Editor'
    innerEditor();

    //POI: This function is not attached to 'this' causing it to be a PRIVATE METHOD
    //POI: Leveraging function declaration & thus the function will be hoisted
    function innerEditor() {
        return version;
    }

    //------------------- PUBLIC INTERFACE -------------------------------------------------------------------------

    //POI: This function is attached to 'this' causing it to be a public property
    this.theme = "MONAKI";

    //POI: Following throws exception because 'editorUsingInnerFunc' is defined as function expression. So the function is NOT hoisted inside it's enclosing scope that is defined in this 
    //case by outer function 'Editor'
    // this.editorUsingInnerFunc();

    //POI: This function is attached to 'this' causing it to be a public method given that 'this' is being returned from constructor
    //POI: Leveraging function expression
    //INSIGHT: Methods can only be attached to an object ONLY by function expression
    this.editorUsingInnerFunc = function() {
        return innerEditor;
    }

    //POI: This works because 'editorUsingInnerFunc' is defined at this level
    this.editorUsingInnerFunc();
}

var editor = new Editor();

//editor.innerEditor();
//innerEditor();
print(editor.version);//undefined

//POI: Proper values are given for the following object properties/methods because they are part of the public interface
print(editor.editorUsingInnerFunc());//"[Function: innerEditor]"
print(editor.editorUsingInnerFunc()());//"v.0.23"
print(editor.theme);//MONAKI


// ------------------------------ FUCNTION EXPRESSION vs FUNCTION DECLARATION ---------------------------------------------

//POI: funcOne has been HOISTED. That's why the function invocation works properly here even though the function is declared later
funcOne();

//POI: Function Declaration
function funcOne() {

}

funcOne();

//POI: funcTwo is declared as FUNCTION EXPRESSION. FUNCTION EXPRESSION's are NOT hoisted. So invocation of funcTwo works only after that function is declared
//funcTwo();

//POI: Function expression
var funcTwo = function() {

}

funcTwo();

// ------------------------------ CONDITIONALLY DEFINING  ---------------------------------------------

function Window(isFuncDeclaration) {

    //POI: The function is declared anyway because of function hoisting. The condition doesn't matter
    funcDeclaration();
    
    //POI: Function expression is used. So it's not hoisted. So the function is NOT available here
    //funcExpression();

    if(isFuncDeclaration) {
        //POI: In strict mode, functions can only be defined at top level or immediately after another function
        function funcDeclaration() {
            print("FUNC DECLARATION");
        }
    } else if(!isFuncDeclaration) {
        var funcExpression = function() {
            print("FUNC EXPRESSION");
        }
    }

    //POI: This statement will throw error when 'Window(true)' is used because then the function is not really defined here. So conditioning is working
    //POI: JS doesn't depend on block scoping
    funcExpression();
}

//Window(true);

//POI: This statement will declare funcExpression
Window(false);
