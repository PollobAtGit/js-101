
export class Greeter {
    constructor() {
        this.greeting = "Hello World!";
    }
}
export class WelcomeGreeter extends Greeter {
    constructor() {
        super();
        this.greeting = "Hello World! From WelcomeGreeter";
    }
}