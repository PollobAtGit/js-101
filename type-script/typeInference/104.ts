
namespace OneZeroFour {

    const cl = (v: any) => console.log(v);

    class Event { }
    class MouseEvent extends Event { }
    class KeyEvent { keyCode: number; }

    const listenEvent = (h: (e: Event) => void) => { };
    const anotherListenEvent = (h: (e: MouseEvent) => void) => { };

    listenEvent((e: Event): void => { });
    anotherListenEvent((e: MouseEvent): void => { });

    // KFU! Doesn't make sense because KeyEvent is structurally different from Event
    listenEvent((e: KeyEvent): void => { });

    // KFU! Doesn't make sense number/string/boolean has nothing to do with Event
    // KFU! No type checking is being done
    // Explanation! Type checking fails when class & interfaces have no member because in this case eveything
    // is assignable to them

    listenEvent((e: number): void => { });
    listenEvent((e: string): void => { });
    listenEvent((e: boolean): void => { });

    // POI: From JS's respect it doesn't matter because it doesn't care about the type.
    // Interpreter will simply invoke the object property

    // POI: Passing more specific type as function argument (polymorphic behavior)
    listenEvent((e: MouseEvent): void => { });
    // POI: Passing less specific type as function argument (contravariance?)
    anotherListenEvent((e: Event): void => { });

    const invokeLater = (cb: (...arg: number[]) => void) => { };

    // POI: Because of rest argument we can pass any number of parameters
    invokeLater((x): void => { });
    invokeLater((x, y): void => { });
    invokeLater((x, y, z): void => { });

    // POI: Because of rest argument we can pass function that has any number of optional parameters
    invokeLater((): void => { });

    // POI: This is semantically same as providing any of
    // () : void = { }
    // (x) : void = { }
    // (x, y) : void = { }
    // Note that it's not possible to ommit x but provide y

    invokeLater((x?, y?): void => { });

    // POI: This is not allowed because it's not possible to distinguish values between x & y when x is
    // optional & first argument
    // invokeLater((x?, y): void => { });

    function xListenMethod(e: Event): void;
    function xListenMethod(e: string): void;

    // POI: Overloaded function definition must follow after the overloaded function list. Only
    // comments are allowed in between
    function xListenMethod(e: any): void {
        if (typeof e === "string") { cl("STRING"); }
        if (typeof e === "object") { cl("OBJECT"); }
    }

    xListenMethod("WITH STRING");
    xListenMethod(new Event());

    const nonVoid = (cb: () => void): void => cb();

    // KFU! Callback returns void but passed callback returns non-void
    // Apparently a better explanation is void indicates compiler won't care about what callback function returns
    nonVoid((): number => 10);
}

// IMPORTANT: Type checking is sloopy in case of function argument
// IMPORTANT: For callback less specific type is assignable to more specific type & vice versa
// IMPORTANT: For callback optional arguments & rest argument is interchangeable

// IMPORTANT: Type checking fails for class & interfaces when they have no member
// TODO: Prove above statement
