var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OneZeroFour;
(function (OneZeroFour) {
    var cl = function (v) { return console.log(v); };
    var Event = (function () {
        function Event() {
        }
        return Event;
    }());
    var MouseEvent = (function (_super) {
        __extends(MouseEvent, _super);
        function MouseEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MouseEvent;
    }(Event));
    var KeyEvent = (function () {
        function KeyEvent() {
        }
        return KeyEvent;
    }());
    var listenEvent = function (h) { };
    var anotherListenEvent = function (h) { };
    listenEvent(function (e) { });
    anotherListenEvent(function (e) { });
    // KFU! Doesn't make sense because KeyEvent is structurally different from Event
    listenEvent(function (e) { });
    // KFU! Doesn't make sense number/string/boolean has nothing to do with Event
    // KFU! No type checking is being done
    // Explanation! Type checking fails when class & interfaces have no member because in this case eveything
    // is assignable to them
    listenEvent(function (e) { });
    listenEvent(function (e) { });
    listenEvent(function (e) { });
    // POI: From JS's respect it doesn't matter because it doesn't care about the type.
    // Interpreter will simply invoke the object property
    // POI: Passing more specific type as function argument (polymorphic behavior)
    listenEvent(function (e) { });
    // POI: Passing less specific type as function argument (contravariance?)
    anotherListenEvent(function (e) { });
    var invokeLater = function (cb) { };
    // POI: Because of rest argument we can pass any number of parameters
    invokeLater(function (x) { });
    invokeLater(function (x, y) { });
    invokeLater(function (x, y, z) { });
    // POI: Because of rest argument we can pass function that has any number of optional parameters
    invokeLater(function () { });
    // POI: This is semantically same as providing any of
    // () : void = { }
    // (x) : void = { }
    // (x, y) : void = { }
    // Note that it's not possible to ommit x but provide y
    invokeLater(function (x, y) { });
    // POI: Overloaded function definition must follow after the overloaded function list. Only
    // comments are allowed in between
    function xListenMethod(e) {
        if (typeof e === "string") {
            cl("STRING");
        }
        if (typeof e === "object") {
            cl("OBJECT");
        }
    }
    xListenMethod("WITH STRING");
    xListenMethod(new Event());
    var nonVoid = function (cb) { return cb(); };
    // KFU! Callback returns void but passed callback returns non-void
    // Apparently a better explanation is void indicates compiler won't care about what callback function returns
    nonVoid(function () { return 10; });
})(OneZeroFour || (OneZeroFour = {}));
// IMPORTANT: Type checking is sloopy in case of function argument
// IMPORTANT: For callback less specific type is assignable to more specific type & vice versa
// IMPORTANT: For callback optional arguments & rest argument is interchangeable
// IMPORTANT: Type checking fails for class & interfaces when they have no member
// TODO: Prove above statement
