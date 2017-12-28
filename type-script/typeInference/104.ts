
namespace OneZeroFour {

    class Event { }
    class MouseEvent extends Event { }

    const listenEvent = (h: (e: Event) => void) => { };
    const anotherListenEvent = (h: (e: MouseEvent) => void) => { };

    listenEvent((e: Event): void => { });
    anotherListenEvent((e: MouseEvent): void => { });

    // POI: From JS's respect it doesn't matter because it doesn't care about the type.
    // Interpreter will simply invoke the object property

    // POI: Passing more specific type as function argument (polymorphic behavior)
    listenEvent((e: MouseEvent): void => { });
    // POI: Passing less specific type as function argument (contravariance?)
    anotherListenEvent((e: Event): void => { });
}
