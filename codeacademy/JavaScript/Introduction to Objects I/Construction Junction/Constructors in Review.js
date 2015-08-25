function Rabbit(adjective) {
    this.adjective = adjective;

    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();

